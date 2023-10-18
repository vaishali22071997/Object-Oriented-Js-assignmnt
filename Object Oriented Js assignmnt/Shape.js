class Shape {
  // Base class with default methods for area and perimeter
  constructor() {
    if (new.target === Shape) {
      throw new Error("Shape class should not be instantiated directly.");
    }
  }

  area() {
    throw new Error("Area calculation not implemented for this shape.");
  }

  perimeter() {
    throw new Error("Perimeter calculation not implemented for this shape.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(base, height, sideA, sideB, sideC) {
    super();
    this.base = base;
    this.height = height;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  area() {
    return (this.base * this.height) / 2;
  }

  perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
}

// Example usage:
const circle = new Circle(5);
console.log(`Circle - Area: ${circle.area()}, Perimeter: ${circle.perimeter()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle - Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);

const triangle = new Triangle(4, 5, 3, 4, 5);
console.log(`Triangle - Area: ${triangle.area()}, Perimeter: ${triangle.perimeter()}`);
