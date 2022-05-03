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

class Super_Ninja extends Ninja{
    constructor(name, health, speed, strength, wisdom = 10){
        super(name, health = 200, speed = 10, strength = 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Surround youself with tacos, not negativity.")
    }
    
}

const s1 = new Super_Ninja("Joe Armstrong")

s1.speakWisdom();

s1.showStats();
