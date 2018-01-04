import React, { Component } from 'react';
import Tile from './Tile';

class HoldingsTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileSortBy: 'size',
    };
  }

  flattenTicker(ticker_) {
    const ticker = Object.assign({}, ticker_);
    const flattendTicker = [];
    for (const tick in ticker) {
      const x = [tick, parseFloat(ticker[tick].last), parseFloat(ticker[tick].percentChange)];
      flattendTicker.push(x);
    }
    return flattendTicker;
  }


  // function modifies and holdings and adds on an additional 24change
  /*
  creates an array with:
  [currency, amount, usdPrice, usdValue, usdPriceChange]
  */
  createFullTileData(holdings_, ticker_) {
    // create copies of objects and filter non-holdings
    const ticker = Object.assign({}, ticker_);
    const holdings = Object.assign({}, holdings_);
    const flattendTicker = this.flattenTicker(ticker); // convert obj to array
    // ["pair", price, % change]
    const filteredTicker = flattendTicker.filter((tick) => {
      for (let holding = 0; holding < Object.keys(holdings).length; holding++) {
        if (holdings[holding][0] === tick[0].split('_')[1] && tick[0].split('_')[0] === 'BTC') {
          return true;
        }
      }
      return false;
    });

    // Normalize all data to USD base.
    const btcUsdRate = parseFloat(ticker.USDT_BTC.last);
    const btcUsdRateChange = parseFloat(ticker.USDT_BTC.percentChange);
    const rateAdjustedTiles = [];
    Object.keys(filteredTicker).forEach((tick) => {
      const rateUsdBase = filteredTicker[tick][1] * btcUsdRate;
      const changeUsdBase = ((1 + filteredTicker[tick][1]) * (1 + btcUsdRateChange)).toFixed(2);
      rateAdjustedTiles.push([filteredTicker[tick][0].split('_')[1], rateUsdBase.toFixed(4), changeUsdBase]);
    });

    // Manually handle usdt_btc and usdt case
    Object.keys(holdings).forEach((i) => {
      if (holdings[i][0] === 'BTC') {
        rateAdjustedTiles.push(['BTC', parseFloat(ticker.USDT_BTC.last).toFixed(2), parseFloat(ticker.USDT_BTC.percentChange).toFixed(2)]);
      }
      if (holdings[i][0] === 'USDT') {
        rateAdjustedTiles.push(['USDT', '1.00', '1.00']);
      }
    });

    for (let i = 0; i < rateAdjustedTiles.length; i++) {
      Object.keys(holdings).forEach((holding) => {
        if (rateAdjustedTiles[i][0] === holdings[holding][0]) {
          rateAdjustedTiles[i].push((holdings[holding][1]).toFixed(2));
        }
      });
    }

    console.log(rateAdjustedTiles);
    return rateAdjustedTiles;
  }

  handleSortChange(sortBy) {
    this.setState({ tileSortBy: sortBy });
  }

  renderLoading() {
    return (
      <div className="row">
        <div className="col-12">
          <div style={{ textAlign: 'center' }}>
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1" />
              <div className="sk-cube sk-cube2" />
              <div className="sk-cube sk-cube3" />
              <div className="sk-cube sk-cube4" />
              <div className="sk-cube sk-cube5" />
              <div className="sk-cube sk-cube6" />
              <div className="sk-cube sk-cube7" />
              <div className="sk-cube sk-cube8" />
              <div className="sk-cube sk-cube9" />
            </div>
            <h4>Loading your individual holdings...</h4>
          </div>
        </div>
      </div>
    );
  }

  renderTiles(tileSortBy) {
    const holdings = this.createFullTileData(this.props.holdings, this.props.ticker);
    // Sort tiles based on parameter
    if (tileSortBy === 'size') {
      holdings.sort((a, b) => b[3] - a[3]);
    } else if (tileSortBy === 'change') {
      holdings.sort((a, b) => b[2] - a[2]);
    } else if (tileSortBy === 'price') {
      holdings.sort((a, b) => b[1] - a[1]);
    }

    return (
      <div className="row">
        {holdings.map(holding =>
          (<Tile
            key={holding[0]}
            currency={(holding[0])}
            price={holding[1]}
            priceChange={holding[2]}
            value={holding[3]}
          />))}
      </div>
    );
  }

  render() {
    return (
      <div className="card card-section" >
        <div className="card-body">
          <div className="row">
            <div className="col-6"><h2>Individual Holdings</h2></div>
            <div className="col-6">
              {/* Sorting */}
              <span className="float-right">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className={`btn btn-secondary btn-outline-secondary ${this.state.tileSortBy === 'size' ? 'active' : ''}`} onClick={() => this.handleSortChange('size')}>
                    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Holding Size
                  </label>
                  <label className={`btn btn-secondary btn-outline-secondary ${this.state.tileSortBy === 'price' ? 'active' : ''}`} onClick={() => this.handleSortChange('price')}>
                    <input type="radio" name="options" id="option2" autoComplete="off" /> Price
                  </label>
                  <label className={`btn btn-secondary btn-outline-secondary ${this.state.tileSortBy === 'change' ? 'active' : ''}`} onClick={() => this.handleSortChange('change')}>
                    <input type="radio" name="options" id="option3" autoComplete="off" /> Change
                  </label>
                </div>
              </span>
            </div>
          </div>

          {this.props.ticker.USDT_BTC && Object.keys(this.props.holdings).length ? (
            this.renderTiles(this.state.tileSortBy)
          ) : (
              this.renderLoading()
            )}
        </div>
      </div>
    );
  }
}

export default HoldingsTiles;