var creaturePopulation = 0;
var animalId = 7;
var allCreatures = [];

$(document).ready(function(){
});

function createCreature(){
    var name = $("#nameInput").val();
    var species = Number($("#creatureSelector").val());
    var creature;
    var type = "";
    switch(species){
        case 0:
            console.log("Opps! Pick a creature type");
            break;
            break;
        case 1:
            creature = new Hippogriff(name, animalId);
            type = "Hippogriff";
            break;
        case 2:
            creature = new Thestral(name, animalId);
            type = "Thestral";
            break;
        case 3:
            creature = new Unicorn(name, animalId);
            type = "Unicorn";
            break;
        case 4:
            creature = new Dragon(name, animalId);
            type = "Dragon";
            break;
        case 5:
            creature = new Flobberworm(name, animalId);
            type = "Flobberworm";
            break;
        case 6:
            creature = new Centaur(name, animalId);
            type = "Centaur";
            break;
        case 7:
            creature = new Acromantula(name, animalId);
            type = "Acromantula";
            break;
    }
    if (type != "") {
        console.log(name + " the " + type + " has been added to your (illegal) zoo! Their ID is " + animalId);
        animalId++;

    }
} //Done :)

function feedCreatures(){

} //empty

function listCreatures(){
    var title = [];
    var species = [];
    var id = [];
    for (var i = 0; i < creaturePopulation; i++) {
        title[i] = allCreatures[i].name;
        species[i] = allCreatures[i].constructor.name;
        id[i] = allCreatures[i].animalId;
    }
    for (var x = 0; x < creaturePopulation; x++){
        $("#creatureNameList").append(title[x]);
        $("#creatureSpeciesList").append(species[x]);
        $("#creatureIdList").append(id[x]);
    }
}

function releaseCreature(){
    var id = $("#releaseInput");
}

function renameCreature(){
    var oldName = $("#oldName");
    var newName = $("#newName");

} //almost empty :)

function getRandomAnimal(){

} //empty


class Creature {

    constructor(name,favoriteFood, aId) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        creaturePopulation++;
        aId = animalId;
        }

    static getPopulation() {
        return creaturePopulation;
    }


    sleep() {
        console.log(this.name + " sleeps for 8 hours ");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood){
            console.log("YUM! " + this.name + " wants more " + food);
        } else {
            this.sleep();
        }
    }
}

class Hippogriff extends Creature{

    constructor(name) {
        super(name, "ferret");
    }
    sleep() {
        console.log(this.name + " flies away");
    }
    eat(food){
        if(food == this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM! " + this.name + " wants more " + food);
        } else if(food != this.favoriteFood){
            console.log("YUCK!" + this.name + " will not eat " + food);
        }
    }
}

class Thestral extends Creature{

    constructor(name) {
        super(name, "raw meat");
    }

    sleep() {
        console.log(this.name + " flies away");
    }
}

class Unicorn extends Creature{

    constructor(name) {
        super(name, "leaves");
    }
    sleep(){
        console.log(this.name + " sleeps on the ground");
    }
}

class Dragon extends Creature{

    constructor(name) {
        super(name, "bloody Susan");
    }
    sleep(){
        console.log(this.name + " sleeps on a mountain");
    }
    eat(food){
    }
}

class Flobberworm extends Creature{

    constructor(name) {
        super(name, "lettuce");
        var num = 0;
    }
    eat(food) {
        if(num >= 5){
            this.sleep()
        }
        if (food == this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM! " + this.name + " wants more " + food);
            num ++;
        } else if (food != this.favoriteFood) {
            console.log("YUCK! " + this.name + " will not eat " + food);
        }
    }
    sleep(){
        console.log(this.name + " dies");
        die();
    }
}

class Centaur extends Creature{

    constructor(name) {
        super(name, "vegetables");
    }
    eat(food) {
    }
    sleep(){
        console.log(this.name + " runs away");
    }
}

class Acromantula extends Creature {

    constructor(name) {
        super(name, "human");
    }
    eat(food) {
        if (food == this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM! " + this.name + " wants more " + food);
        } else if (food != this.favoriteFood) {
            console.log("eats another acromantula instead");
        }
    }
    sleep(){
        console.log(this.name + " eats " + getRandomAnimal());
    }
}


class Gamekeeper{

    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals of " + Animal.getPopulation() + " animals");
        for(var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }
}