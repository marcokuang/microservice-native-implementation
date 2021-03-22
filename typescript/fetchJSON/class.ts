class Vehicle {
  private engine = "V6";

  drive(): void {
    console.log("Zoom Zoom");
  }

  honk(): void {
    console.log(this.engine + " Beep");
  }
}

class Car extends Vehicle {
  private doors = 4;
  protected color;
  // seats: number;

  constructor(public seats: number = 5, color: string = "black") {
    super();
    this.color = color;
    this.seats = seats;
  }

  honk(): void {
    console.log("Bark");
  }

  openDoor(): number {
    return this.doors;
  }
}

const toyota = new Car(2);
toyota.honk();
toyota.drive();
console.log(toyota.openDoor());
console.log(toyota.seats);

type MyHistory = {
  date: Date;
  message: string;
};

class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
}
