import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`Todo has the following properties:
  id: ${id}
  title: ${title}
  and is it finished? ${completed}
  `);
};

let apples: number = 5;
class Car {
  model: string;
}
let car: Car = new Car();

// Object Literal
let coordinates: { x: number; y: number } = {
  x: -4,
  y: 89,
};
console.log(car, coordinates, apples);

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

let words = ["red", "green"];
let foundWord: boolean;
for (let word of words) {
  if (word === "banana") {
    foundWord = true;
  }
}

let nums = [-10, -1, -3];
let numAboveZero: boolean | number = false;
for (let num of nums) {
  if (num > 0) {
    numAboveZero = num;
  }
}

const add = (x: number, y: number): number => {
  return x + y;
};

interface Weather {
  date: Date;
  message: string;
}

const weather: Weather = {
  date: new Date(),
  message: "sunny",
};
const logWeather = ({ date, message }: { date: Date; message: string }) => {
  console.log(date);
  console.log(message);
};
logWeather(weather);

const { date }: { date: Date } = weather;

const carsByMake = [["a"], ["z"]];
const myCar = carsByMake[0];

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  // expecting a function returning a string
  summary(): string;
}

const oldCivic: Vehicle = {
  name: "old",
  year: new Date(),
  broken: true,
  summary: function (): Date {
    return null;
  },
};

console.log(oldCivic.summary() + 2);
