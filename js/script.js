var price, toppingPrice, crustPrice;
let totalPrice = 0;

function selectPizza (name, size, toppings, crust, total) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.total = total;
  
}

// button continue 

$(document).ready(function() {
  $("button#continue").click(function(event) {
    let pizzaFlavor = $("#flavor optiom:selected").val();
    let pizzaSize = $("#size option:seleceted").val();
    let pizzaToppings = $("#toppings:selected").val();
  });
  
  switch(pizzaSize) {
    case "0":
      price = 0;
    break;
    case "large":
      price = 1100;
      console.log(price);
    break;
    case "medium":
       price = 850;
       console.log(price);
    break;
    case "small":
       price = 450;
       console.log(price);
    default:
      console.log("error found");
  }
});