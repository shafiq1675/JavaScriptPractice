
function Helper() {

}
let fatherName = "Omar";
var name = "khan";
Helper.AddTwoNumber = function (firstNumber, secondNUmber) {
    return firstNumber + secondNUmber;
};
console.log(name);
console.log(fatherName);
console.log(Helper.AddTwoNumber(5, 10));

var arr = ["khan", "hasib", "shafiq"];
console.log(arr.length);
arr.push("ask");
console.log(arr.length);
console.log(arr[3]);
arr.splice(1, 1, "khan");
console.log(arr);

let myToDo = {
    mettings: 0,
    mettingDone: 0,
    addMetting: function (todo, metting) {
        return todo.mettings += metting;
    },
}

myToDo.addMetting(myToDo,5);
console.log(myToDo.mettings);