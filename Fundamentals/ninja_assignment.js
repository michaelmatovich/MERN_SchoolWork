class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed  = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`Hello my name is ${this.name}.`);
    }
    showStats(){
        console.log("Name: " + this.name);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        console.log("Health: " + this.health);
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

n1 = new Ninja("Joe", 100, 10, 20);

n1.sayName();
n1.showStats();
n1.drinkSake().drinkSake().drinkSake().drinkSake().drinkSake();

n1.showStats();