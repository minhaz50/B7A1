# Question:

## How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

# Answer:

Generics in TypeScript allow us to create reusable functions, classes, and components that can work with different data types while still preserving strict type safety.

## Problem

Without generics, if you wanted a function to work with any data type, we might use (any). (any) effectively turns off the TypeScript compiler, leading to potential runtime errors because the "connection" between the input type and return type is lost.

Example:
function typeAny (item : any) : any { </br>
return item; </br>
}

## The Solution in Type Variables:

Generics use a special variable (conventionally <T>) to capture the type provided by the caller.

function itemType <T> (item: T) : T { </br>
return item; </br>
}

const result = itemType <sting> ("hello") // T is now sting </br>
const count = itemType <number> (20);; // T is now number

# Why This Makes Code Reusable

The same function can now work with:

strings
numbers
objects
arrays
custom types

without rewriting the logic.

we write the function once and reuse it everywhere.

# Object Example

function getData<T>(data: T): T { </br>
return data; </br>
}

const user = getData({ </br>
name: "Minhaz", </br>
age: 28, </br>
});

TypeScript automatically understands: </br>

user.name
user.age

and provides correct typing + autocomplete. </br>

# Generic Array Example

function firstElement<T>(arr: T[]): T { </br>
return arr[0]; </br>
}

Usage:

const num = firstElement([1, 2, 3]);

TypeScript infers:

num → number

# Generic Constraints

Sometimes we want flexibility, but with rules.

Example:

function printLength<T extends { length: number }>(item: T) {</br>
console.log(item.length); </br>
}

This works:

printLength("hello"); </br>
printLength([1, 2, 3]);

But this fails:

printLength(100);

Because numbers do not have a length property.

The main benift of Generics:

1.  Write reusable code. </br>
2.  Maintain strict type safety. </br>
3.  Get better autocomplete. </br>
4.  Catch error at compile time. </br>
5.  Avoid using any. <br/>
