class Car {
    constructor(brand, model, color, price) {
        console.log('Creating a new car');
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    start() {
        console.log('Car started');
    }

    stop() {
        console.log('Car stopped');
    }
}

let fortuner = new Car(); // Creating a new car with no values

let swift = new Car('Maruti', 'Swift', 'Red', 800000); // Creating a new car with the given values



//--------------------------------------------------------------------------------------------

console.log(fortuner); // Car { brand: undefined, model: undefined, color: undefined, price: undefined }
console.log(swift); 
