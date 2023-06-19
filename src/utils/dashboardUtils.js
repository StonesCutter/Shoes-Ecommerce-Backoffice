function yearlySellsStats(orders) {
  let monthlyOrderCount = new Array(12).fill(0);
  if (orders) {
    const year = new Date().getFullYear();
    const propertyNames = ["total_price", "created_at"];
    let arrayForStats = [];
    let currentYearOrders = orders.filter(
      (order) => order.created_at.slice(0, 4) === year.toString()
    );

    arrayForStats = filterArrayByProperties(currentYearOrders, propertyNames);
    //console.log("arrayForStats", arrayForStats);
    monthlyOrderCount = countObjectsByMonth(arrayForStats);
  }

  return monthlyOrderCount;
}

function yearlyIncomeStats(orders) {
  let monthlyOrderCount = new Array(12).fill(0);
  if (orders) {
    const year = new Date().getFullYear();
    const propertyNames = ["total_price", "created_at"];
    let arrayForStats = [];
    let currentYearOrders = orders.filter(
      (order) => order.created_at.slice(0, 4) === year.toString()
    );

    arrayForStats = filterArrayByProperties(currentYearOrders, propertyNames);
    //console.log("arrayForStats", arrayForStats);
    monthlyOrderCount = countIncomeByMonth(arrayForStats);
  }

  return monthlyOrderCount;
}

function countrySellsStats(orders) {
  if (orders) {
    const propertyNames = ["address"];
    let arrayForStats = filterArrayByProperties(orders, propertyNames);
    let countriesArray = arrayForStats.map((obj) => {
      const address = obj.address.split(",")[0].trim();
      return { address };
    });
    const obj = countOrdersPerCountry(countriesArray);
    return obj;
  }
}

function filterArrayByProperties(arr, propertyNames) {
  const filteredArray = arr.map((item) => {
    const filteredItem = {};
    propertyNames.forEach((name) => (filteredItem[name] = item[name]));
    return filteredItem;
  });
  return filteredArray;
}

function countObjectsByMonth(data) {
  const monthCounts = new Array(12).fill(0);
  let index = 0;
  // loop through each object in the data array
  for (index = 0; index < monthCounts.length; index++) {
    let arrayPerMonth = data.filter(
      (order) => parseInt(order.created_at.slice(5, 7), 10) === index + 1
    );
    monthCounts[index] = arrayPerMonth.length;
  }
  return monthCounts;
}

function countIncomeByMonth(data) {
  const monthCounts = new Array(12).fill(0);
  let index = 0;
  // loop through each object in the data array
  for (index = 0; index < monthCounts.length; index++) {
    let arrayPerMonth = data.filter(
      (order) => parseInt(order.created_at.slice(5, 7), 10) === index + 1
    );

    let income = 0;
    let incomeOfTheMonth = arrayPerMonth.map((obj) => {
      //console.log("OBJ ------->", obj.total_price);
      income = income + obj.total_price;
      return { income };
    });
    /*monthCounts[index] = arrayPerMonth.reduce(
      (total, number) => total + number,
      0
    );*/
    const monthlyIncome = incomeOfTheMonth.reduce(
      (total, item) => total + item.income,
      0
    );
    monthCounts[index] = monthlyIncome;
    //console.log("income mese di " + index + " : ", monthlyIncome);
  }
  //console.log("monthCounts", monthCounts);
  return monthCounts;
}

function top5mostRecentOrders(array) {
  if (!array) return;
  array.sort((a, b) => new Date(b.date) - new Date(a.date));
  return array.slice(0, 5);
}

const countOrdersPerCountry = (arr) => {
  const counts = arr.reduce((accumulator, obj) => {
    const country = obj.address;
    accumulator[country] = (accumulator[country] || 0) + 1;
    return accumulator;
  }, {});

  const countries = Object.keys(counts);
  const countValues = Object.values(counts);
  const obj = [{ labels: countries }, { series: countValues }];

  //return { countries, countValues };
  return obj;
};

export {
  yearlySellsStats,
  top5mostRecentOrders,
  countrySellsStats,
  yearlyIncomeStats,
};
