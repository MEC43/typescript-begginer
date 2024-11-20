interface UserRecap2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}

class PlayerRecap2 implements UserRecap2, Human {
  constructor(
    public firstName: string, //
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `안녕, ${name}. 내 이름은 ${this.fullName()} `;
  }
}

function makeUser(user: UserRecap2): UserRecap2 {
  return {
    firstName: 'a',
    lastName: 'b',
    fullName: () => 'cc',
    sayHi: (name) => 'string',
  };
}

makeUser({
  firstName: 'a',
  lastName: 'b',
  fullName: () => 'cc',
  sayHi: (name) => 'string',
});
