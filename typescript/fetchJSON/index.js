"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(id, title, finished);
});
var logTodo = function (id, title, completed) {
    console.log("Todo has the following properties:\n  id: " + id + "\n  title: " + title + "\n  and is it finished? " + completed + "\n  ");
};
var apples = 5;
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object Literal
var coordinates = {
    x: -4,
    y: 89
};
console.log(car, coordinates, apples);
var logNumber = function (i) {
    console.log(i);
};
var words = ["red", "green"];
var foundWord;
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    if (word === "banana") {
        foundWord = true;
    }
}
var nums = [-10, -1, -3];
var numAboveZero = false;
for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
    var num = nums_1[_a];
    if (num > 0) {
        numAboveZero = num;
    }
}
var add = function (x, y) {
    return x + y;
};
var weather = {
    date: new Date(),
    message: "sunny"
};
var logWeather = function (_a) {
    var date = _a.date, message = _a.message;
    console.log(date);
    console.log(message);
};
logWeather(weather);
