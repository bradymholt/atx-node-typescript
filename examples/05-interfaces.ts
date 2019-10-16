// Interfaces

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const person: Person = {
  firstName: "Sue",
  lastName: "Donaldson",
  age: 24
};

//#region
// const personWithNoLastName:Person = {
//   firstName: "Sue",
//   age: 24
// };

// // Optional Properties
// interface MysteriousPerson {
//   firstName: string;
//   lastName?: string; // ? means optional
//   age: number;
// }

// let mysteryPerson: MysteriousPerson = {
//   firstName: "Sue",
//   age: 24
// };
//#endregion