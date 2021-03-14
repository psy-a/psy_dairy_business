var m1Monday = 510;
var m2Monday = 308;
var m3Monday = 486;
var m4Monday = 572;

var m1Tuesday = 560;
var m2Tuesday = 450;
var m3Tuesday = 520;
var m4Tuesday = 400;

var m1Wednesday = 450;
var m2Wednesday = 500;
var m3Wednesday = 480;
var m4Wednesday = 600;

var m1Thursday = 600;
var m2Thursday = 350;
var m3Thursday = 450;
var m4Thursday = 505;

var m1Friday = 490;
var m2Friday = 530;
var m3Friday = 488;
var m4Friday = 570;

var m1Saturday = 388;
var m2Saturday = 450;
var m3Saturday = 390;
var m4Saturday = 430;

var m1Sunday = 350;
var m2Sunday = 370;
var m3Sunday = 350;
var m4Sunday = 400;

var productionShedA = function () {
  alert(
    "Milk Production for Today Monday in Shed A is " + m1Monday + " Litres."
  );
};
var productionShedB = function () {
  alert(
    "Milk Production for Today Monday in Shed B is " + m2Monday + " Litres."
  );
};
var productionShedC = function () {
  alert(
    "Milk Production for Today Monday in Shed C is " + m3Monday + " Litres."
  );
};
var productionShedD = function () {
  alert(
    "Milk Production for Today MOnday in Shed D is " + m4Monday + " Litres."
  );
};
var totalProductionToday = function () {
  var totalToday = m1Monday + m2Monday + m3Monday + m4Monday;
  alert("Total Milk Production for Today Monday is " + totalToday + " Litres.");
};
var sellingPrice = 45;
var totalMonday = m1Monday + m2Monday + m3Monday + m4Monday;
var totalTuesday = m1Tuesday + m2Tuesday + m3Tuesday + m4Tuesday;
var totalWednesday = m1Wednesday + m2Wednesday + m3Wednesday + m4Wednesday;
var totalThursday = m1Thursday + m2Thursday + m3Thursday + m4Thursday;
var totalFriday = m1Friday + m2Friday + m3Friday + m4Friday;
var totalSaturday = m1Saturday + m2Saturday + m3Saturday + m4Saturday;
var totalSunday = m1Sunday + m2Sunday + m3Sunday + m4Sunday;

var productionMonday = function () {
  var salesMonday = totalMonday * sellingPrice;
  alert("Sales for Monday are KSh " + salesMonday + ".");
};
var productionTuesday = function () {
  var salesTuesday = totalTuesday * sellingPrice;
  alert("Sales for Tuesday are KSh " + salesTuesday + ".");
};
var productionWednesday = function () {
  var salesWednesday = totalWednesday * sellingPrice;
  alert("Sales for Wednesday are KSh " + salesWednesday + ".");
};
var productionThursday = function () {
  var salesThursday = totalThursday * sellingPrice;
  alert("Sales for Thursday are KSh " + salesThursday + ".");
};
var productionFriday = function () {
  var salesFriday = totalFriday * sellingPrice;
  alert("Sales for Friday are KSh " + salesFriday + ".");
};
var productionSaturday = function () {
  var salesSaturday = totalSaturday * sellingPrice;
  alert("Sales for Saturday are KSh " + salesSaturday + ".");
};
var productionSunday = function () {
  var salesSunday = totalSunday * sellingPrice;
  alert("Sales for Sunday are KSh " + salesSunday + ".");
};
var totalProductionWeek = function () {
  var totalWeek =
    totalMonday +
    totalTuesday +
    totalWednesday +
    totalThursday +
    totalFriday +
    totalSaturday +
    totalSunday;
  alert("Total Sales for this Week are Ksh " + totalWeek * sellingPrice + ".");
};
var salesJanuary = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total January Sales are KSh " + salesDay1 * 31 + ".");
};
var salesFebruary = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total February Sales are KSh " + salesDay1 * 29 + ".");
};
var salesMarch = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total March Sales are KSh " + salesDay1 * 31 + ".");
};
var salesApril = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total April Sales are KSh " + salesDay1 * 30 + ".");
};
var salesMay = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total May Sales are KSh " + salesDay1 * 31 + ".");
};
var salesJune = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total June Sales are KSh " + salesDay1 * 30 + ".");
};
var salesJuly = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total July Sales are KSh " + salesDay1 * 31 + ".");
};
var salesAugust = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total August Sales are KSh " + salesDay1 * 31 + ".");
};
var salesSeptember = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total September Sales are KSh " + salesDay1 * 30 + ".");
};
var salesOctober = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total October Sales are KSh " + salesDay1 * 31 + ".");
};
var salesNovember = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total November Sales are KSh " + salesDay1 * 30 + ".");
};
var salesDecember = function () {
  var salesDay1 = totalMonday * 45;
  alert("Total December Sales are KSh " + salesDay1 * 31 + ".");
};
var salesJanuary1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 31;
};
var salesFebruary1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 29;
};
var salesMarch1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 31;
};
var salesApril1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 30;
};
var salesMay1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 31;
};
var salesJune1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 30;
};
var salesJuly1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 31;
};
var salesAugust1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 31;
};
var salesSeptember1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 30;
};
var salesOctober1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 31;
};
var salesNovember1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 30;
};
var salesDecember1 = function () {
  var salesDay1 = totalMonday * 45;
  return salesDay1 * 31;
};
var totalYearlySales = function () {
  alert(
    "Total Yearly Sales are KSh " +
      (salesJanuary1() +
        salesFebruary1() +
        salesMarch1() +
        salesApril1() +
        salesMay1() +
        salesJune1() +
        salesJuly1() +
        salesAugust1() +
        salesSeptember1() +
        salesOctober1() +
        salesNovember1() +
        salesDecember1()) +
      "."
  );
};
var newRateComparison = function () {
  var newSalesJanuary = totalMonday * (49.6 * 31);
  var difference = newSalesJanuary - salesJanuary1();
  alert(
    "New January Sales are KSh " +
      newSalesJanuary +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesFebruary = totalMonday * (49.6 * 29);
  var difference = newSalesFebruary - salesFebruary1();
  alert(
    "New February Sales are KSh " +
      newSalesFebruary +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesMarch = totalMonday * (49.6 * 31);
  var difference = newSalesMarch - salesMarch1();
  alert(
    "New March Sales are KSh " +
      newSalesMarch +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesApril = totalMonday * (49.6 * 30);
  var difference = newSalesApril - salesApril1();
  alert(
    "New April Sales are KSh " +
      newSalesApril +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesMay = totalMonday * (49.6 * 31);
  var difference = newSalesMay - salesMay1();
  alert(
    "New May Sales are KSh " +
      newSalesMay +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesJune = totalMonday * (49.6 * 30);
  var difference = newSalesJune - salesJune1();
  alert(
    "New June Sales are KSh " +
      newSalesJune +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesJuly = totalMonday * (49.6 * 31);
  var difference = newSalesJuly - salesJuly1();
  alert(
    "New July Sales are KSh " +
      newSalesJuly +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesAugust = totalMonday * (49.6 * 31);
  var difference = newSalesAugust - salesAugust1();
  alert(
    "New August Sales are KSh " +
      newSalesAugust +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesSeptember = totalMonday * (49.6 * 30);
  var difference = newSalesSeptember - salesSeptember1();
  alert(
    "New September Sales are KSh " +
      newSalesSeptember +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesOctober = totalMonday * (49.6 * 31);
  var difference = newSalesOctober - salesOctober1();
  alert(
    "New October Sales are KSh " +
      newSalesOctober +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesNovember = totalMonday * (49.6 * 30);
  var difference = newSalesNovember - salesNovember1();
  alert(
    "New November Sales are KSh " +
      newSalesNovember +
      ", an increase of KSh " +
      difference +
      "."
  );
  var newSalesDecember = totalMonday * (49.6 * 31);
  var difference = newSalesDecember - salesDecember1();
  alert(
    "New December Sales are KSh " +
      newSalesDecember +
      ", an increase of KSh " +
      difference +
      "."
  );
};
