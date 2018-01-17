export function fetchPoloniexTicker() {
  console.log('calling /poloniex/ticker');
  return new Promise((resolve, reject) => {
    fetch('/poloniex/ticker').then((res) => {
      if (!res.ok) {
        reject(res);
      } else {
        res.json().then((data) => {
          resolve(data);
        });
      }
    });
  });
}

export function fetchPoloniexCompleteBalances() {
  console.log('calling /poloniex/completeBalances');
  return new Promise((resolve, reject) => {
    fetch('/poloniex/completeBalances').then((res) => {
      if (!res.ok) {
        reject(res);
      } else {
        res.json().then((data) => {
          const d = poloObjectToArray(data);
          resolve(d);
        });
      }
    });
  });
}

export function fetchTradeHistory(pair) {
  console.log('calling /poloniex/tradeHistory');
  return new Promise((resolve, reject) => {
    fetch(`/poloniex/tradeHistory/${pair}`).then((res) => {
      if (!res.ok) {
        reject(res);
      } else {
        res.json().then((data) => {
          resolve(data);
        });
      }
    });
  });
}

export function fetchPortfolioPerformance(pair) {
  return new Promise((resolve, reject) => {
    fetch('/poloniex/performance').then((res) => {
      if (!res.ok) {
        reject(res);
      } else {
        res.json().then((data) => {
          resolve(data);
        });
      }
    });
  });
}

export async function fetchFullPortfolioPerformance() {
  return new Promise(async (resolve, reject) => {
    fetch('poloniex/fullPerformance').then(async (res) => {
      if (res.ok) {
        resolve((await res.json()));
      } else {
        reject(res);
      }
    });
  });
}

function poloObjectToArray(obj) {
  const a = [];
  console.log(obj);
  for (const key in obj) {
    if (key === 'USDT') {
      a.push([key, parseFloat(obj[key].available)]);
    } else {
      a.push([key, parseFloat(obj[key].btcValue)]);
    }
  }
  console.log(a);
  return a;
}
