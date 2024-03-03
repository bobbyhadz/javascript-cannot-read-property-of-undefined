// Cannot read Properties of Undefined in JavaScript

// EXAMPLE 1 - Use the optional chaining (?.) operator

const person = undefined;

// ✅ Using optional chaining
console.log(person?.name); // 👉️ undefined
console.log(person?.name?.first); // 👉️ undefined

// ✅ Using if / else
if (person?.name) {
  console.log(person.name);
} else {
  // 👇️ this runs
  console.log('person.name not found');
}

// ✅ Using logical AND (&&) operator
console.log(person && person.name); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the Logical AND operator

// const person = undefined;

// console.log(person && person.name); // 👉️ undefined

// // 👇️ undefined
// console.log(person && person.name && person.name.first);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Access arrays only at indices that exist

// const arr = [];

// console.log(arr[0]?.name); // ✅ Good

// console.log(arr[0] && arr[0].name); // ✅ Good

// ------------------------------------------------------------------

// // EXAMPLE 4 - Provide a fallback value for when the variable stores an undefined value

// const name = undefined;

// const result1 = (name ?? 'bobby').toUpperCase();
// console.log(result1); // 👉️ BOBBY

// const obj = undefined;

// const result2 = (obj ?? {name: 'bobby'}).name;
// console.log(result2); // 👉️ bobby
