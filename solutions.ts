// Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num: number) => num % 2 === 0);
}

const inputArray = [1, 3, 5, 7, 9];
const result = filterEvenNumbers(inputArray);

console.log(result);

// Problem 2

function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

const inputString = "typescript";
const resultString = reverseString(inputString);

console.log(resultString);

// Problem 3

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

console.log(checkType("Hello"));
console.log(checkType(33));

// Problem 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  userName: "jhon deo",
  age: 32,
};

const users = getProperty(user, "userName");
console.log(users);

// problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const updateBook = toggleReadStatus(myBook);
console.log(updateBook);

// problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

// Problem 6

function getIntersection(arr1: number[], arr2: number[]): number[] {
  const sets = new Set(arr2);

  return arr1.filter((item) => sets.has(item));
}

const intersetionResult = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(intersetionResult);
