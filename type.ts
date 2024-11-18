type Players = {
  readonly name: string;
  age?: number;
};

const playerMaker = (name: string): Players => {
  return {
    name,
  };
};

const cme = playerMaker('cme');
cme.age = 20;

const numbers: readonly number[] = [1, 2, 4, 5];
// numbers.push(3);
