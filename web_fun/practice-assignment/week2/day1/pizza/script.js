function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage onions"]);
console.log(s1);
var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms", "olives","onions"]);
console.log(s2);
var s3 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "thon"]);
console.log(s3);
var s4 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms", "olives","ma3ednous"]);
console.log(s4);
function randomPizza(){
    var pizza = Math.random();
    pizza=Math.floor(Math.random() * 4);

    return pizza;
}
var randomPizza = randomPizza();
console.log("i chois this pizza : s" + randomPizza);