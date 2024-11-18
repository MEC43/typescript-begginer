abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}
  abstract getNickname(argument: string): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class PlayerClass extends User {
  getNickname() {
    console.log(this.nickname);
  }
}

const neko = new PlayerClass('neko', 'nya', '네코');

neko.getFullName();
