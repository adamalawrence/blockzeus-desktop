const createAuthHeader = () => {
  let authToken = JSON.parse(localStorage.getItem('user')).token;
  if (!authToken) { authToken = 'DEMO'; }
  // console.log(authToken);
  return {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      authorization: `Bearer ${authToken}`,
    },
  };
};

const createDemoAuthHeader = () => {
  return {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      authorization: `Bearer DEMO`,
    },
  };
};

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
    fetch('/poloniex/completeBalances', createAuthHeader()).then((res) => {
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

export function fetchDemoPoloniexCompleteBalances() {
  console.log('calling /poloniex/completeBalances');
  return new Promise((resolve, reject) => {
    fetch('/poloniex/completeBalances', createDemoAuthHeader()).then((res) => {
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
    fetch(`/poloniex/tradeHistory/${pair}`, createAuthHeader()).then((res) => {
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
    fetch('/poloniex/performance', createAuthHeader()).then((res) => {
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
    fetch('poloniex/fullPerformance', createAuthHeader()).then(async (res) => {
      if (res.ok) {
        resolve((await res.json()));
      } else {
        reject(res);
      }
    });
  });
}

export async function fetchFullDemoPortfolioPerformance() {
  return new Promise(async (resolve, reject) => {
    fetch('poloniex/fullPerformance', createDemoAuthHeader()).then(async (res) => {
      if (res.ok) {
        resolve((await res.json()));
      } else {
        reject(res);
      }
    });
  });
}

export async function testPoloniexIntegration() {
  return new Promise(async (resolve, reject) => {
    fetch('poloniex/testIntegration', createAuthHeader()).then(async (res) => {
      if (res.ok) {
        const sampleData = await res.json();
        if (sampleData) {
          console.log(sampleData);
          resolve(true);
        }
      } else {
        reject(res.statusText);
      }
    });
  });
}

function poloObjectToArray(obj) {
  const a = [];
  for (const key in obj) {
    if (key === 'USDT') {
      a.push([key, parseFloat(obj[key].available)]);
    } else {
      a.push([key, parseFloat(obj[key].btcValue)]);
    }
  }
  return a;
}