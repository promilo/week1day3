var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function totalSales(objectSales){
  var total = 0;
  var len = objectSales.length;
  for (var i = 0; i < len; i++){
    var currentSales = objectSales[i];
    total += currentSales;
    }
  return total;
}

function salesTax(tax, sales){
  return tax * sales;
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {}
  for (var i=0; i < salesData.length; i++){
    var valueObject = {};
    valueObject["totalSales"] = 0;
    valueObject["totalTaxes"] = 0;
    var currentSalesObject = salesData[i];
    result[currentSalesObject.name] = valueObject;
  }


  for (var i=0; i < salesData.length; i++){
    var currentSalesObject = salesData[i];
    total = totalSales(currentSalesObject.sales);
    var currentProvince = currentSalesObject.province;
    tax = taxRates[currentProvince];
    totalTax = salesTax(total, tax);
    result[currentSalesObject.name].totalSales += total;
    result[currentSalesObject.name].totalTaxes += totalTax;

  }
return result;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
