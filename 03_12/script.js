/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Car {
    constructor(make, model, year, color, type, numberOfDoors, onOff) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.type = type;
        this.numberOfDoors = numberOfDoors;
        this.onOff = onOff;
    }

    start() {
        this.onOff = "on";
        console.log(`The ${this.make} ${this.model} is now ${this.onOff}`);
    }

    stop() {
        this.onOff = "off";
        console.log(`The ${this.make} ${this.model} is now ${this.onOff}`);
    }

    changeColor(color) {
        this.color = color;
        console.log(
            `The ${this.make} ${this.model} color was updated to: ${this.color}`
        );
    }
}

const JeepWJ = new Car(
    "Jeep",
    "Grand Cherokee",
    "2001",
    "Brown",
    "SUV",
    4,
    "off"
);

const Silverado = new Car(
    "Chevorlet",
    "Silverado 2500HD",
    "2002",
    "Black",
    "Truck",
    4,
    "on"
);

const Buick = new Car(
    "Buick",
    "LeSabre",
    "1970",
    "Gold",
    "Coupe",
    2,
    "off"
);

JeepWJ.start();
JeepWJ.stop();

Silverado.stop();

Buick.changeColor("Purple");
