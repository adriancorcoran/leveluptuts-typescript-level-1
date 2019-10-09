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
let newName: string = "Scott"; //  compiler auto knows that the type is a. string
newName = "Wes";
// newName = 10;

// inherits type from initial declaration, not current value

let newNameTwo = newName;
// newNameTwo = 10;

//  ------------------------------------------------

// union types with |

const makeMargin = (x: string | number): string => {
  return `margin: ${x}ps`;
};

makeMargin(10);
makeMargin("10");

//  ------------------------------------------------

// null types - anything can also be null or undefined
//  null types are auto added to standard type declarations
// if you wanna say it can never be null or undefined (uinless you set that it can) you run it with the 'strict null check' flag

let dog: string | undefined = "Riggs";
dog = null; //  can be reset to null
dog = "Dott";
// dog = undefined;
// dog = 10;
// dog = true;

//  ------------------------------------------------

// interface allows type checking of data of a particlar shape
// define interface, give it properties and then use it as arguments for a function

interface Person {
  name: string;
  age?: number; //  optional
  surname?: string;
}

const sayName = ({ name, age, surname }: Person): Person => {
  console.log(name);
  return { name, age, surname };
};

// const sayName = ({ name, age }: Person): string => {
//   console.log(name);
//   return name;
// };

// sayName("Karen", 39);
// sayName(39, "Karen"); //  won't work, the order of types matters
sayName({
  name: "Karen",
  age: 39
});
sayName({
  age: 39,
  name: "Karen",
  surname: "McCrann"
});

//  ------------------------------------------------

// Enums - protect you from values you weren't expected in your code

// Enums allow us to define a set of named constants - commonly in select list
// can only be one of these values
// they are also indexed

// Numeric enum
enum Type {
  Video, //  0
  BlogPost, //  1
  Quiz //2
}

const createContent = (contentType: Type) => {};
createContent(Type.Video);
console.log(Type.Quiz);

// String enum
enum Type2 {
  Video = "VIDEO", //  0
  BlogPost = "BLOG_POST", //  1
  Quiz = "QUIZ" //2
}

const createContent2 = (contentType: Type2) => {};
createContent2(Type2.Video);
console.log(Type2.Quiz);
