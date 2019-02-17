
function Helper() {

}

console.log('================variable=================');

let fatherName = "Omar";
var name = "khan";

console.log(name);
console.log(fatherName);

console.log('================function=================');

Helper.AddTwoNumber = function (firstNumber, secondNUmber) {
    return firstNumber + secondNUmber;
};

console.log(Helper.AddTwoNumber(5, 10));


console.log('================array=================');

var arr = ["khan", "hasib", "shafiq"];
console.log(arr.length);
arr.push("ask");
console.log(arr.length);
console.log(arr[3]);
arr.splice(1, 1, "khan");
console.log(arr);

console.log('================for loop=================');

for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} your position ${i + 1}`);
}
console.log('================for each loop=================');
arr.forEach(function (name, index) {
    console.log(`${name} your position ${index + 1}`);
})

console.log('================works with object=================');

let myToDo = {
    mettings: 0,
    mettingDone: 0,
    addMetting: function (todo, meet) {
        return todo.mettings += meet;
    },
    meetDone: function (todo, met) {
        return todo.mettingDone -= met;
    },
    summeryCal: function (todo) {
        return todo.mettings + todo.mettingDone;
    }
}

myToDo.addMetting(myToDo, 5);
myToDo.meetDone(myToDo, 4);

console.log(`${myToDo.summeryCal(myToDo)} meeting left.`)

