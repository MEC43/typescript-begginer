type Player = {
  name: string;
  age?: number;
};

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }
const playerMaker = (name: string): Player => {
  return {
    name,
  };
};

const cme = playerMaker('cme');
cme.age = 20;
