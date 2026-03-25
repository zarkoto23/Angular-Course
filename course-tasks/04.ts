abstract class Melon {
  constructor(
    public weight: number,
    public melonSort: string,
  ) {}

  abstract element: string;

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
  }
}

class Watermelon extends Melon {
  element = "Water";
}

class Firemelon extends Melon {
  element = "Fire";
}

class Earthmelon extends Melon {
  element = "Earth";
}

class Airmelon extends Melon {
  element = "Air";
}

// let test : Melon = new Melon(100, "Test");

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");

console.log(watermelon.toString());
