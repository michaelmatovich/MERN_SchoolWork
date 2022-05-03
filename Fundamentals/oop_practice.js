class Vehicle{
    constructor(manufacturer, model, color){
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        
    }

    drive(){        

        console.log(`you drove the ${this.model}.`)
        this.miles += 10;
        console.log(`the ${this.model} now has ${this.miles} on it.`)
    }
}
const car = new Vehicle("Chevy", "Tahoe", "blue");

car.drive();
console.log(car.miles);

