class Unit{
    constructor(name, cost, power, resilience){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;        
    }
    attack ( target ){
        if( target instanceof Unit){
            console.log(`${this.name} attacks ${target.name}...`);
            target.resilience -= this.power;
            console.log(`${target.name}'s resilience is reduced to ${target.resilience}`);
            console.log("");
        }
        else{
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect{
    constructor(target, name, cost, targeted_stat, magnitude){
        this.target = target;
        this.name = name;
        this.cost = cost;
        this.targeted_stat = targeted_stat;
        this.magnitude = magnitude;
    }
    play( target ){
        if( target instanceof Unit)
        {
            console.log(`${this.name} played against ${this.target.name}...`)
            console.log(`${target.name}'s ${this.targeted_stat} is ${this.cost == 1 ? "reduced" : "increased"} by ${this.magnitude}.`)
            console.log("")
            if(this.cost == 1){
                target.resilience -= 2;
            }
            else if(this.cost == 2){
                target.resilience += 3;
            }
            else if(this.cost == 3){                
                target.power += 2;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

rbn = new Unit("Red Belt Ninja", 3, 3, 4);

hae = new Effect(rbn, "Hard Algorithm", 2, "resilience", 3);

hae.play(rbn);

bbn = new Unit("Black Belt Ninja", 4, 5, 4);

upre = new Effect(rbn, "Unhandled Promise Rejection", 1, "resilience", 2);

upre.play(rbn);

ppe = new Effect(rbn, "Pair Programming", 3, "power", 2);

ppe.play(rbn)

rbn.attack(bbn);




