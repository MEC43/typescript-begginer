// type UserInt = {
//   name: string;
// };
// type Player2 = UserInt & {};

interface UserInt {
  // readonly name: string;
  name: string;
}
interface UserInt {
  lastName: string;
}
interface UserInt {
  health: number;
}

interface Player2 extends UserInt {}

const bbb: Player2 = {
  name: 'bbb',
  lastName: 'B',
  health: 1,
};

// bbb.name = 'ccc'
