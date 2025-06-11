let apple: number = 5;

let speed: string = "fist";

let isTrue: boolean = true;

let day: Date = new Date();

let colors: string[] = ["asdjfi", "iwe", "gao"];

let myNumbers: number[] = [2, 2, 344];

class Car {}

let car: Car = new Car();

//object
let point: { x: number; y: number } = {
  x: 10,
  y: 22,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const numbers = [-19, -2, 2002];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
