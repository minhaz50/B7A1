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
