/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const computer = {
  brand: "Apple",
  operatingSystem: "macOS",
  type: "laptop",
};

const desk = {
  material: "wood",
  numOfLegs: 4,
};

const backpack = {
  color: "black",
  brand: "Dakine",
  size: "32L",

  headphones: {
    brand: "Bose",
    color: "black",
  },
};

console.log(computer);
console.log(desk);
console.log(backpack);
