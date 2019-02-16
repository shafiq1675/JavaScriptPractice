

function Helper() {

}
var name = "khan";
Helper.AddTwoNumber = function (firstNumber, secondNUmber) {
    return firstNumber + secondNUmber;
};
console.log(name);
console.log(Helper.AddTwoNumber(5, 10));

var arr = ["khan", "hasib", "shafiq"];
console.log(arr.length);
arr.push("ask");
console.log(arr.length);
console.log(arr[3]);
arr.splice(1, 1, "khan");
console.log(arr);