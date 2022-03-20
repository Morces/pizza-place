var pizzaPrice, toppingPrice, crustPrice;
let totalPrice = 0;

function selectPizza (name, size, toppings, crust, totalPrice) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.totalPrice = totalPrice;
  
}

// button continue 

$(document).ready(function() {
  $("button#continue").click(function(event) {
    let pizzaFlavor = $("#flavor optiom:selected").val();
    let pizzaSize = $("#size option:seleceted").val();
    let pizzaToppings = $("#toppings:selected").val();
    let pizzaCrust = $("#crust:selected").val();
    
    switch(pizzaSize) {
      case "0":
        pizzaPrice = 0;
      break;
      case "large":
        pizzaPrice = 1100;
        console.log(pizzaPrice);
      break;
      case "medium":
         pizzaPrice = 850;
         console.log(pizzaPrice);
      break;
      case "small":
         pizzaPrice = 450;
         console.log(pizzaPrice);
      default:
        console.log("error found");
    }
    switch(pizzaCrust) {
      case "0":
        crustPrice = 0;
      break;
      case "Crispy":
        crustPrice = 200;
        console.log(crustPrice);
      break;
      case "Stuffed":
         crustPrice = 150;
         console.log(crustPrice);
      break;
      case "Gluten-free":
         crustPrice = 100;
         console.log(crustPrice);
      default:
        console.log("null price");
    }
  
    switch(pizzaToppings) {
      case "0":
        toppingPrice = 0;
      break;
      case "Tomato":
        toppingPrice = 70;
        console.log(toppingPrice);
      break;
      case "Sausage":
         toppingPrice = 70;
         console.log(toppingPrice);
      break;
      case "Mushroom":
         toppingPrice = 70;
         console.log(toppingPrice);
      break;
      case "Bacon":
         toppingPrice = 70;
         console.log(toppingPrice);
      default:
        console.log("null price");
    }
  
      if ((pizzaSize == "0") && (pizzaCrust == "0")) {
        console.log("You have not selected anything");
        $("button#continue").show();
        $("div.selection").hide();
        alert ("Please make a selection!!");
      }
      else {
        $("button#continue").hide();
        $("div.selection").slideDown(900);
      }
  
      totalPrice = pizzaPrice + crustPrice + toppingPrice;
      console.log(totalPrice);
      let total = 0;
      total = total + totalPrice;
  
      $("#pizzaflavor").html($("#flavor option:selected").val());
      $("#pizzasize").html($("#size option:selected").val());
      $("#pizzatoppings").html($("#toppings option:selected").val());
      $("#pizzacrust").html($("#crust option:selected").val());
      $("#totalling").html(totalPrice);
  
  // this is the button for adding pizza
  
    $("button#another").click(function() {
      let pizzaFlavor = $("#flavor optiom:selected").val();
      let pizzaSize = $("#size option:seleceted").val();
      let pizzaToppings = $("#toppings:selected").val();
      let pizzaCrust = $("#crust:selected").val();
      
      switch(pizzaSize) {
        case "0":
          pizzaPrice = 0;
        break;
        case "large":
          pizzaPrice = 1100;
          console.log(price);
        break;
        case "medium":
           pizzaPrice = 850;
           console.log(price);
        break;
        case "small":
           pizzaPrice = 450;
           console.log(price);
        default:
          console.log("error found");
      }
      switch(pizzaCrust) {
        case "0":
          crustPrice = 0;
        break;
        case "Crispy":
          crustPrice = 200;
          console.log(crustPrice);
        break;
        case "Stuffed":
           crustPrice = 150;
           console.log(crustPrice);
        break;
        case "Gluten-free":
           crustPrice = 100;
           console.log(crustPrice);
        default:
          console.log("null price");
      }
    
      switch(pizzaToppings) {
        case "0":
          toppingPrice = 0;
        break;
        case "Tomato":
          toppingPrice = 70;
          console.log(toppingPrice);
        break;
        case "Sausage":
           toppingPrice = 70;
           console.log(toppingPrice);
        break;
        case "Mushroom":
           toppingPrice = 70;
           console.log(toppingPrice);
        break;
        case "Bacon":
           toppingPrice = 70;
           console.log(toppingPrice);
        default:
          console.log("null price");
      }
      totalPrice = pizzaPrice + crustPrice + toppingPrice;
      console.log(totalPrice);
      total + total + totalPrice;
      console.log(total);
  
  // this is a constructor function
  
      var newOrder = new selectPizza(pizzaFlavor, pizzaSize, pizzaToppings, pizzaCrust, totalPrice);
      $("#ordered").append('<tr><td id="thename">' + newOrder.name + '</td><td id="thesize">' + newOrder.size + '</td><td id"thecrust">' + newOrder.crust + '</td><td id="thetopping">' + newOrder.toppings + '</td><td id="amount">' + newOrder.totalPrice + '</td></tr>');
      console.log(newOrder);
  
    });
  
    // this is the button for checking out
    $("button#process").click(function() {
      $("button#process").hide();
      $("button#another").hide();
      $("button#deliver").slideDown(900);
      $("#deliveryfee").slideDown(900);
      console.log("Pay Ksh." + total);
      $("#itemno").append("This is your bill: Ksh." + total);
    });
  
    // Delivery button
  
    $("button#deliver").click(function() {
      $(".ordertable").hide();
      $(".selection h4").hide();
      $(".delivery").slideDown(900);
      $("#deliveryfee").hide();
      $("button#deliver").hide();
      $("#itemno").hide();
      let deliverycost = total + 200;
      console.log("Please pay Ksh." + deliverycost + "on delivery");
      $("#cost").append("This is the total amount you should pay" + deliverycost);
    })
  
    // complete order button
    $("#finalize").click(function(event) {
      event.preventDefault();
  
      $("itemno").hide();
      $("#delivery").hide();
      $("button#finalze").hide();
      let deliverycost = total + 200;
      console.log("Your final bill is: Ksh." + deliverycost);
      let customer = $("input#your-name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();
  
      if ($("input#your-name").val() && $("input#phone").val() && $("input#location").val() !="") {
        $("#message").append("Hello" + customer +", Your order has been received and will be delivered at" + location)
        $("#cost").hide();
        $("#message").slideDown(1000);
      }
      else {
        alert("Please provide your delivery details");
        $("#delivery").show();
        $("button#finalize").show();
      }
    });
    event.preventDefault();
    });
    // event.preventDefault();
  });





