

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    var thingy = "crust type: " + crustType + "\n" + "sauce type: " + sauceType + "\n" + "cheeses: ";
    if(cheeses.length==1){
        thingy += cheeses[0];
        thingy += "\n";
        thingy += "toppings: ";
    }
    else{
        for(var i = 0; i < cheeses.length; i++){
            thingy += cheeses[i];
            thingy+= ", ";
        }
        thingy += "\n";
        thingy += "toppings: ";
    }

    if(toppings.length==1){
        thingy += toppings[0];
    }
    else{
        for(var i = 0; i < toppings.length; i++){
            thingy += toppings[i];
            thingy += ", ";
        }
    }
    return thingy;
}

var p1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(p2);

var p3 = pizzaOven("thin","buffalo",["mozzarella","cheddar"],["black olives","green olives"]);
console.log(p3);

var p4 = pizzaOven("stuffed","white",["mozzarella"],["pepperoni","pepperachini"]);
console.log(p4);

function randomPizza(){
    rndCrust = ["deep dish","thin","hand tossed","stuffed"];
    rndSauce = ["buffalo", "marinara", "white", "pesto"];
    rndCheese = ["mozzarella", "provolone", "cheddar", "parmesan"]
    rndTopping = ["black olives", "green olives", "jalapenos", "green pepper", "pepperochini", "sausage", "pepperoni", "banana pepper", "onion",]
    return pizzaOven(rndCrust[Math.floor(Math.random()*4)], rndSauce[Math.floor(Math.random()*4)] , [rndCheese[Math.floor(Math.random()*4)]], [rndTopping[Math.floor(Math.random()*9)],rndTopping[Math.floor(Math.random()*9)]]);
}
console.log(randomPizza());