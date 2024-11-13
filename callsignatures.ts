// type Add = (a: number, b: number) => number;
// type Add = {
//   (a: number, b: number): number;
//   (a: number, b: string): number;
// };
// const add: Add = (a, b) => {
//   if (typeof b === 'string') return a;
//   return a + b;
// };

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
