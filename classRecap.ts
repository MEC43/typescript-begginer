abstract class UserRecap {
  constructor(
    protected firstName: string, //
    protected lastName: string
  ) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class PlayerRecap extends UserRecap {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `안녕, ${name}. 내 이름은 ${this.fullName()} `;
  }
}
