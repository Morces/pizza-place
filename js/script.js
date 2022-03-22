let pizzaPrice;
let crustPrice;
let toppingPrice; 
let totalPrice = 0;

function selectPizza (name, size, toppings, crust, totalPrice) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.totalPrice = totalPrice;
  
}

// button continue 

$(document).ready(function() {
  $("button#continue").click(function(event) {
    let pizzaFlavor = $("#flavor option:selected").val();
    let pizzaSize = $("#size option:selected").val();
    let pizzaCrust = $("#crust option:selected").val();
    let pizzaToppings = [];
    $.each($("input[name='toppings']:checked"), function() {
      pizzaToppings.push($(this).val());
    });
    console.log(pizzaToppings.join(", "));


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
      // default:
      //   console.log("error found");
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
      // default:
      //   console.log("null price");
    }
    let toppingsvalue = pizzaToppings.length*70;
    console.log("toppings value " + toppingsvalue);
    
  
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
  
      totalPrice = pizzaPrice + crustPrice + toppingsvalue;
      console.log(totalPrice);
      let checkTotal = 0;
      checkTotal = checkTotal + totalPrice;
  
      $("#thename").html($("#flavor option:selected").val());
      $("#thesize").html($("#size option:selected").val());
      $("#thecrust").html($("#crust option:selected").val());
      $("#thetopping").html(pizzaToppings.join(", "));
      $("#amount").html(totalPrice);
  
  // this is the button for adding pizza
  
    $("button#another").click(function() {
      let pizzaFlavor = $("#flavor option:selected").val();
      let pizzaSize = $("#size option:selected").val();
      let pizzaCrust = $("#crust option:selected").val();
      $.each($("input[name='toppings']:checked"), function() {
        pizzaToppings.push($(this).val());
      });
      console.log(pizzaToppings.join(", "));
      
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
      let toppingsvalue = pizzaToppings.length*70;
      console.log("toppings value" + toppingsvalue);
      totalPrice = pizzaPrice + crustPrice + toppingsvalue;
      console.log(totalPrice);

      
      checkTotal = checkTotal + totalPrice;
      console.log(checkTotal);
  
  // this is a constructor function
  
      var newOrder = new selectPizza(pizzaFlavor, pizzaSize, pizzaToppings, pizzaCrust, totalPrice);
      // console.log(newOrder.name);
      $("#ordered").append('<tr><td id="thename">' + newOrder.name + '</td><td id="thesize">' + newOrder.size + '</td><td id="thecrust">' + newOrder.crust + '</td><td id="thetopping">' + newOrder.toppings + '</td><td id="amount">' + newOrder.totalPrice + '</td></tr>');
      // console.log(newOrder);
  
    });
  
    // this is the button for checking out
    $("button#process").click(function() {
      $("button#process").hide();
      $("button#another").hide();
      $("button#deliver").slideDown(900);
      // $("#deliveryfee").slideDown(900);
      console.log("Pay Ksh." + checkTotal);
      $("#itemno").append("This is your bill: Ksh." + checkTotal);
    });
  
    // Delivery button
  
    $("button#deliver").click(function() {
      $(".ordertable").hide();
      $(".selection h4").hide();
      $(".delivery").slideDown(900);
      $("#deliveryfee").hide();
      $("button#deliver").hide();
      $("#itemno").hide();
      let deliveryCost = checkTotal + 200;
      console.log("Please pay Ksh." + deliveryCost + " on delivery");
      $("#cost").append("This is the total amount you should pay Kshs." + deliveryCost);
    });
  
    // complete order button
    $("button#finalize").click(function(event) {
      event.preventDefault();
  
      $("itemno").hide();
      $(".delivery").hide();
      $("button#finalize").hide();
      let deliverAmount = checkTotal + 200;
      console.log("Your final bill is: Ksh." + deliverAmount);
      let customer = $("input#your-name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();
  
      if ($("input#your-name").val() && $("input#phone").val() && $("input#location").val() !="") {
        $("#message").append("Hello " + customer +", Your order has been received and will be delivered at " + location + " Pay Kshs." + deliverAmount)
        $("#cost").hide();
        $("#message").slideDown(1000);
      }
      else {
        alert("Please provide your delivery details");
        $(".delivery").show();
        $("button#finalize").show();
      }
     });
     event.preventDefault();
    });
  });





