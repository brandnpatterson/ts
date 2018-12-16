import * as _ from 'lodash';

let lucky = 23;
const favoriteNumber = (value: number): void => {
  console.log(`My favorite number is ${value}`);
};

favoriteNumber(lucky);

const pow = (x: number, y: number): string => {
  return Math.pow(x, y).toString();
};

const numbers = pow(1, 2);
console.log(numbers);

// Interfaces
interface Person {
  first: string;
  last: string;
}

const brandon: Person = {
  first: 'Brandon',
  last: 'Patterson'
};

const arr: Person[] = [];

arr.push(brandon);

// Tuples
type MyList = [number, string, boolean];

const tuple: MyList = [2, 'hello', true];

// Generics
class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<Person>;
