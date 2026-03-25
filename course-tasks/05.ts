class Box<T> {
  private elements: T[] = [];

  add(element: T): void {
    this.elements.push(element);
  }

  remove(): void {
    this.elements.pop();
  }

  get count(): number {
    return this.elements.length;
  }
}

let box1 = new Box<Number>();

box1.add(1);

box1.add(2);

box1.add(3);

console.log(box1.count);

console.log("------------------------------");

let box = new Box<String>();

box.add("Pesho");

box.add("Gosho");

console.log(box.count);

box.remove();
console.log(box.count);
