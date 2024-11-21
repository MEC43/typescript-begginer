type PlayerC = {
  firstName: string;
};

interface PlayerD {
  firstName: string;
}

class PersonC implements PlayerC {
  constructor(public firstName: string) {}
}
class PersonD implements PlayerD {
  constructor(
    //
    public firstName: string
  ) {}
}
