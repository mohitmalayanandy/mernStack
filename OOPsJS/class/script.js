class Car {
    start() {
        console.log('Car started');
    }

    stop() {
        console.log('Car stopped');
    }

    setBrand(brand) {
        this.brand = brand;
    }
    setMilage(milage) {
        this.milage = milage;
    }
    setPrice(price) {
        this.price = price;
    }
    setModel(model) {
        this.model = model;
    }
    setYear(year) {
        this.year = year;
    }
}

let fortuner = new Car();
fortuner.setBrand('Toyota');
fortuner.setMilage(10);
fortuner.setPrice(3000000);
fortuner.setModel('Fortuner');
fortuner.setYear(2021);

let swift = new Car();
swift.setBrand('Maruti');
swift.setMilage(20);
swift.setPrice(800000);
swift.setModel('Swift');
swift.setYear(2021);

let i20 = new Car();
i20.setBrand('Hyundai');
i20.setMilage(18);
i20.setPrice(900000);
i20.setModel('i20');
i20.setYear(2021);

let creta = new Car();
creta.setBrand('Hyundai');
creta.setMilage(15);
creta.setPrice(1200000);
creta.setModel('Creta');
creta.setYear(2021);

let venue = new Car();
venue.setBrand('Hyundai');
venue.setMilage(17);
venue.setPrice(1000000);
venue.setModel('Venue');
venue.setYear(2021);

let verna = new Car();
verna.setBrand('Hyundai');
verna.setMilage(16);
verna.setPrice(1100000);
verna.setModel('Verna');
verna.setYear(2021);

let baleno = new Car();
baleno.setBrand('Maruti');
baleno.setMilage(19);
baleno.setPrice(700000);
baleno.setModel('Baleno');
baleno.setYear(2021);

let dzire = new Car();
dzire.setBrand('Maruti');
dzire.setMilage(21);
dzire.setPrice(800000);
dzire.setModel('Dzire');
dzire.setYear(2021);

//--------------------------------------------------------------------------------------------

console.log(fortuner);
console.log(swift);
console.log(i20);
console.log(creta);
console.log(venue);
console.log(verna);
console.log(baleno);
console.log(dzire);