class Temperature {
  constructor() {
    this._celsius = 0;
    this._fahrenheit = 32;
  }

  // Getter and setter for Celsius temperature
  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (typeof value === 'number' && !isNaN(value)) {
      this._celsius = value;
      this._fahrenheit = this._celsius * 1.8 + 32;
    } else {
      console.error('Invalid input. Temperature must be a numeric value.');
    }
  }

  // Getter and setter for Fahrenheit temperature
  get fahrenheit() {
    return this._fahrenheit;
  }

  set fahrenheit(value) {
    if (typeof value === 'number' && !isNaN(value)) {
      this._fahrenheit = value;
      this._celsius = (this._fahrenheit - 32) / 1.8;
    } else {
      console.error('Invalid input. Temperature must be a numeric value.');
    }
  }
}

// Example usage:
const temperature = new Temperature();

console.log(`Initial Temperature - Celsius: ${temperature.celsius}°C, Fahrenheit: ${temperature.fahrenheit}
