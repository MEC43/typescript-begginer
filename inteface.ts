type Nickname = string;
type Team = 'red' | 'blue' | 'yellow';
type HealthBar = 1 | 5 | 10;

interface Gamer {
  nickname: Nickname;
  team: Team;
  healthBar: HealthBar;
}

const aaa: Gamer = {
  nickname: 'aaa',
  team: 'red',
  healthBar: 10,
};
