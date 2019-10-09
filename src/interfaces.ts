export interface Person {
  name: string;
  age?: number; //  optional
  surname?: string;
}

// Numeric enum
export enum Type {
  Video, //  0
  BlogPost, //  1
  Quiz //2
}

// String enum
export enum Type2 {
  Video = "VIDEO", //  0
  BlogPost = "BLOG_POST", //  1
  Quiz = "QUIZ" //2
}

enum Job {
  WebDev,
  WebDesigner,
  PM
}

export default Job; //  for default exports, need to defin the thing first, then export it
