const isOpen: boolean = false;

const myName: string = "Adrian";

const myAge: number = 38;

const list: number[] = [0, 1, 2];

const me: [string, number, boolean] = ["Adrian", 38, false];

enum Job {
  WebDev,
  WebDesigner,
  PM
}

const job: Job = Job.WebDev;

const phone: any = "Pixel";

const tablet: any = 3;

// functions

//  ------------------------------------------------

// ? for optional params
// const sayWord = (word?: string): string => {
//   console.log(word || "Hello");
//   return word || "Hello";
// };

// sayWord();

//  ------------------------------------------------

// default params
// rest params - same as js
const sayWord = (word = "Hello", ...otherStuff: string[]): string => {
  console.log(otherStuff);
  console.log(word);
  return word;
};

sayWord("Adrian", "Corcoran");

//  ------------------------------------------------

// implicit types

// let newName: any = "Scott";  //  don't get in this habit
let newName = "Scott"; //  compiler auto knows that the type is a. string
newName = "Wes";
// newName = 10;

// inherits type from initial declaration, not current value

let newNameTwo = newName;
// newNameTwo = 10;
