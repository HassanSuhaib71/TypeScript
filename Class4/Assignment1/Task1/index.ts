const input = require("prompt-sync")();

console.log("**********************************");
console.log("********** Shopping App **********");
console.log("**********************************");
//here is the list of shopping items
console.log("What You want to buy?");
let x = input(
  "Press the Corresponding Number : \n 1:Fruits \n 2:Vegetable \n 3:Grocries\n"
);

let fruits = 1;
let vegetable = 2;
let grocries = 3;

if (x == fruits) {
  // here are Fruit List
  console.log("Fruits List");

  console.log(
    " 1: Apples Rs: 250/kg \n 2: Banana Rs: 150/Dozen \n 3: Gava Rs: 200/kg "
  );
  let a = input("Enter corresponding number of Fruits You want to buy: "); //this input describe what you want to buy
  let b = input("Enter number of kg or dozen You want to buy: "); //this input describe how many quantatiy you want to buy
  //this if else condition Clacultae Total bill
  let c = 0;
  if (a == 1) {
    //this condition for calculating Totall bill of buying apple
    c = b * 250;
    console.log("Your Total Bill is : " + c);
  } else if (a == 2) {
    //this condition for calculating Totall bill of buying Banana
    c = b * 150;
    console.log("Your Total bill is : " + c);
  } else if (a == 3) {
    //this condition for calculating Totall bill of buying Gava
    c = b * 200;
    console.log("Your Total bill is : " + c);
  }
  //this condition do Discount
  let discount1;
  if (c >= 1000) {
    console.log("You avail 10% Discount on Your Total Bill.");

    discount1 = c - c * 0.1;
    console.log("Your Bill is Now : " + discount1);
  }
} else if (x == vegetable) {
  //Here are Vegetable List
  console.log("Vegetable List");

  console.log(
    " 1: Tomato Rs: 200/kg \n 2: Potato Rs: 100/kg \n 3: Onion Rs: 150/kg "
  );
  let a = input("Enter corresponding number of vegetable You want to buy: ");
  let b = input("Enter number of kg You want to buy: ");
  //this if else condition calculte total bill of vegetable
  let c = 0;
  if (a == 1) {
    c = b * 250;
    console.log("Your Total Bill is : " + c); //this condition for calculating Totall bill of buying Tomato
  } else if (a == 2) {
    c = b * 150;
    console.log("Your Total bill is : " + c); //this condition for calculating Totall bill of buying Potato
  } else if (a == 3) {
    c = b * 200;
    console.log("Your Total bill is : " + c); //this condition for calculating Totall bill of buying Onion
  }
  //this condition do discount on the bill of Vegetable
  let discount1;
  if (c >= 500) {
    console.log("You avail 10% Discount on Your Total Bill.");

    discount1 = c - c * 0.1;
    console.log("Your Bill is Now : " + discount1);
  }
} else if (x == grocries) {
  //Here Groceceries list
  console.log("Grocreies List");

  console.log(
    " 1: Bean Rs: 450/kg \n 2: Rice Rs: 300/kg \n 3: Eggs Rs: 360/dozen "
  );
  let a = input("Enter corresponding number of Grocesreies You want to buy: ");
  let b = input("Enter number of kg or dozen You want to buy: ");
  //this if else condition calculate bill for Groceesries
  let c = 0;
  if (a == 1) {
    c = b * 250;
    console.log("Your Total Bill is : " + c); //this condition for calculating Totall bill of buying bean
  } else if (a == 2) {
    c = b * 150;
    console.log("Your Total bill is : " + c); //this condition for calculating Totall bill of buying
  } else if (a == 3) {
    c = b * 200;
    console.log("Your Total bill is : " + c); //this condition for calculating Totall bill of buying eggs
  }
  //this condition do discount for Groceries Bill
  let discount1;
  if (c >= 2000) {
    console.log("You avail 10% Discount on Your Total Bill.");

    discount1 = c - c * 0.1;
    console.log("Your Bill is Now : " + discount1);
  }
}

// Here are Payment Details
let payment = ["1.Card ", "2.Cash", "3.Online Transfer "];
console.log("Payment Methods");
for (let i = 0; i <= 2; i++) {
  console.log(payment[i]);
}
let t = input("Enter payment method : ");
// this if else condition describe Payment confirmation
if (t == 1) {
  console.log("Payment is sucessfully Done with card."); //when payment is done with card
} else if (t == 2) {
  console.log("Payment is succesfully Done with cash."); //when payment is done with cash
} else if (t == 3) {
  console.log("Payment is succesfully Done with online transfer."); //when payment is done with online trandfer
} else {
  console.log("Invalid Payment Method!");
}
console.log("Thanks for Shopping here!");
