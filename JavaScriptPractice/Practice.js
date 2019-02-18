
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
    meetings: 0,
    meetingDone: 0,
    addMeeting: function (todo, meet) {
        return todo.meetings += meet;
    },
    meetDone: function (todo, met) {
        return todo.meetingDone -= met;
    },
    summeryCal: function (todo) {
        return todo.meetings + todo.meetingDone;
    }
}

myToDo.addMeeting(myToDo, 5);
myToDo.meetDone(myToDo, 4);

console.log(`${myToDo.summeryCal(myToDo)} meeting left.`);

console.log('===================Math==============================');

if (true) {

    let firstNumber = 22;
    let secondNumber = 7;
    let result = firstNumber / secondNumber;

    console.log(result);
    console.log(`toFixed of ${result} is ${result.toFixed(2)}`);
    console.log(`Math.floor of ${result} is ${Math.floor(result)}`);
    console.log(`Math.ceil of  ${result} is ${Math.ceil(result)}`);
    console.log(`Math.abs of ${result} is ${ Math.abs(-5)}`);


}

console.log('==============let and var==============');

//

if (true) {
    let x = 5;
    var y = 5;
    if (true) {
        let x = 10;
        var y = 10;
        console.log(x); //should be 10
        console.log(y); //should be 10
    }
    console.log(x); //should be 5
    console.log(y); //should be 5 but its return 10

}
console.log(`out side of scope ${y}`); // out side the scope.


