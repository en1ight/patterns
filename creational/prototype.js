/**
 * Prototype pattern
 * object-based
 *
 * Specify the kind of objects to create using a prototypical instance,
 * and create new objects by copying this prototype.
 *
 * We use a sort of a “skeleton” of an existing object to create or instantiate new objects.
 *
 * This pattern is specifically important and beneficial to JavaScript because it utilizes
 * prototypal inheritance instead of a classic object-oriented inheritance.
 * Hence, it plays to JavaScript’s strength and has native support.
 *
 * Reviewing the definitions for this pattern in existing (non-JavaScript) literature,
 * we 're simply creating copies of existing functional objects, not classes
 */

const Car = {
  start() { },
  stop() { },
};

// new method added - "turbo" function
const bmw = Object.create(Car, { turbo: () => console.log('NOS on') });
console.log(bmw.__proto__); // Car

/**
 * Example 2
 *
 * Also we can implement this pattern through class, in that case there is no difference between "constructor" pattern
 */
class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  clone() { return new Sheep(this.name, this.weight) }
}
const dolly = Sheep.clone("Dolly", 60);


/**
 * Example 3
 */
const Vehicle = {
  getModel: function () { console.log( "The model of this vehicle is.." + this.model ) }
};

// set prototype with defining properties
const car = Object.create(Vehicle, {
  id: {
    // writable:false, configurable:false by default
    enumerable: true,
    value: 123
  },
  model: {
    enumerable: true,
    value: "Ford"
  }
});

console.log(car);
console.log(Vehicle.isPrototypeOf(car));