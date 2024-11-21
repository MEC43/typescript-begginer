type PlayerA = {
  name: string;
};
type PlayerAA = PlayerA & {
  lastName: string;
};

const playerA: PlayerAA = {
  name: '하늘',
  lastName: '늘하',
};

////
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
interface PlayerBB {
  health: number;
}

const playerB: PlayerBB = {
  name: '구름',
  lastName: '클라우드',
  health: 3,
};
