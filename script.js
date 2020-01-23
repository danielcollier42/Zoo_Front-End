var creaturePopulation = 0;
//var animalId = 0;
var allCreatures = [];

$(document).ready(function(){
});

function run(){
    var buckbeak = new Hippogriff("Buckbeak");
    //animalId++;
    var hunter = new Thestral("Hunter");
    //animalId++;
    var billy = new Unicorn("Billy");
    //animalId++;
    var norbert= new Dragon("Norbert");
    //animalId++;
    var theodore = new Flobberworm("Theodore");
    //animalId++;
    var ronan = new Centaur("Ronan");
    //animalId++;
    var aragog = new Acromantula("Aragog");
    //animalId++;
    listCreatures();
}

function duplicateTester() {
    var name = $("#nameInput").val();
    var species = Number($("#creatureSelector").val());
    var nameArr = new Array("", "");
    if (name == "") {
        alert("Oops, you should pick a name for your new creature!");
    } else {
        for (var i = 0; i < allCreatures.length; i++) {
            nameArr += allCreatures[i].name;
        }
        if (nameArr.includes(name)) {
            alert("A creature already has that name, why don't you pick another name for your new creature");
        } else {
            createCreature(name, species);
        }
    }
}

function createCreature(name, species){
    var creature;
    var type = "";
    switch(species){
        case 0:
            alert("Oops! Make sure to fill out all of the sections");
            break;
            break;
        case 1:
            creature = new Hippogriff(name);
            type = "Hippogriff";
            break;
        case 2:
            creature = new Thestral(name);
            type = "Thestral";
            break;
        case 3:
            creature = new Unicorn(name);
            type = "Unicorn";
            break;
        case 4:
            creature = new Dragon(name);
            type = "Dragon";
            break;
        case 5:
            creature = new Flobberworm(name);
            type = "Flobberworm";
            break;
        case 6:
            creature = new Centaur(name);
            type = "Centaur";
            break;
        case 7:
            creature = new Acromantula(name);
            type = "Acromantula";
            break;
    }
    if (type != "" && name != "") {
        listCreatures();
        console.log(name + " the " + type + " has been added to your (illegal) zoo!");
        //animalId++;

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
        //id[i] = allCreatures[i].animalId;
        //animalId++;
    }
    for (var x = 0; x < creaturePopulation; x++){
        //$("#creatureNameList").append(title[x]);
        //$("#creatureSpeciesList").append(species[x]);
        // $("#creatureIdList").append(id[x]);
        console.log(title[x] + " the " + species[i] + " has been added to your (illegal) zoo!");
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
        ///aId = animalId;
        allCreatures.push(this);
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