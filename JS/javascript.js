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
    alert("Milk Production for Today Monday in Shed A is "+ m1Monday +" Litres.");
};
var productionShedB = function () {
    alert("Milk Production for Today Monday in Shed B is "+ m2Monday +" Litres.");
};
var productionShedC = function () {
    alert("Milk Production for Today Monday in Shed C is "+ m3Monday +" Litres.");
};
var productionShedD = function () {
    alert("Milk Production for Today MOnday in Shed D is "+ m4Monday +" Litres.");
};
var totalProductionToday = function () {
    var totalToday = m1Monday + m2Monday + m3Monday + m4Monday;
    alert("Total Milk Production for Today Monday is "+ totalToday +" Litres.");
}
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
    alert ("Sales for Monday are KSh "+ salesMonday +".");
}
var productionTuesday = function () {
    var salesTuesday = totalTuesday * sellingPrice;
    alert ("Sales for Tuesday are KSh "+ salesTuesday +".");
}
var productionWednesday = function () {
    var salesWednesday = totalWednesday * sellingPrice;
    alert ("Sales for Wednesday are KSh "+ salesWednesday +".");
}
var productionThursday = function () {
    var salesThursday = totalThursday * sellingPrice;
    alert ("Sales for Thursday are KSh "+ salesThursday +".");
}
var productionFriday = function () {
    var salesFriday = totalFriday * sellingPrice;
    alert ("Sales for Friday are KSh "+ salesFriday +".");
}
var productionSaturday = function () {
    var salesSaturday = totalSaturday * sellingPrice;
    alert ("Sales for Saturday are KSh "+ salesSaturday +".");
}
var productionSunday = function () {
    var salesSunday = totalSunday * sellingPrice;
    alert ("Sales for Sunday are KSh "+ salesSunday +".");
}
var totalProductionWeek = function () {
    var totalWeek = totalMonday + totalTuesday + totalWednesday + totalThursday + totalFriday + totalSaturday + totalSunday;
    alert ("Total Sales for this Week are Ksh "+ totalWeek * sellingPrice +".")
}