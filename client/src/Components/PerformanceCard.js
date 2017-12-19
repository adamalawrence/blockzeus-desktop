import React, { Component } from 'react';
import PortfolioLineChart from './PortfolioLineChart';
import { fetchPortfolioPerformance, fetchFullPortfolioPerformance } from '../exchanges/poloniex';


class PerformanceCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolioPerformance: [],
      fullPerformance: {},
      loaded: false
    }
  }

  componentWillMount() {
    fetchPortfolioPerformance('USDT_BTC').then(portfolioPerformance => {
      portfolioPerformance.map((p) => p[0] *= 1000);
      this.setState({ portfolioPerformance });
    }).catch(err => console.log(err));

    fetchFullPortfolioPerformance().then(fullPerformance => {
      this.setState({ fullPerformance });
      this.setState({loaded: true});
      // console.log(fullPerformance);
    }).catch(err => console.log(err));
  }

  renderChart() {
    return (
      <div className="card card-section" >
        <div className="card-body">
          <h2 className="card-title">Portfolio Performance</h2>
          <PortfolioLineChart loaded={this.state.loaded} data={this.state.fullPerformance} />
        </div>
      </div>
    )
  }

  renderLoading() {
    return (
      <div className="card card-section" >
        <div className="card-body">
          <h2 className="card-title">Portfolio Performance</h2>
          <div className="col"><h2>Loading...</h2></div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.loaded === true) {
      return this.renderChart();
    } else {
      return this.renderLoading();
    }
  }
}

export default PerformanceCard

