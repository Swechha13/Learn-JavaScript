//for loop 
//Situation:
//Aapke paas 5 doston ke naam hain, aur aap har ek ko invite bhejna chahte ho.

let friends = ["Amit", "Neha", "Ravi", "Pooja", "Suresh"];

for (let i = 0; i < friends.length; i++) {
  console.log("Sending invite to " + friends[i]);
}
//Real-life logic: Ek fixed list hai, har naam ko ek ek karke process karna hai — perfect for for loop.

//while loop
//Aap ek water tank fill kar rahe ho jab tak woh full nahi hota.

let tank = 0;
let capacity = 5;

while (tank < capacity) {
  console.log("Filling... Tank level: " + tank);
  tank++;
}
// Real-life logic: Aapko nahi pata kitni baar loop chalega — bas jab tak full nahi hota, fill karte jao.

// do while
//Aap ATM me PIN daal rahe ho — kam se kam 1 baar to try hoga hi.
let correctPin = "1234";
let enteredPin;
let attempts = 0;

do {
  enteredPin = "0000"; // assume wrong input
  attempts++;
  console.log("Wrong PIN! Try again.");
} while (enteredPin !== correctPin && attempts < 3);
//Real-life logic: Kam se kam ek baar PIN try zaroor hota hai — even if galat hai.

//for...of loop
//WhatsApp me 4 unread messages aaye, aap ek ek karke read kar rahe ho.
let messages = ["Hi", "How are you?", "Check this out", "Bye"];

for (let msg of messages) {
  console.log("Reading: " + msg);
}
// Real-life logic:Ek list of items (messages) ko one-by-one read karna — perfect for for...of.

//for...in loop
//Aap ek school bag ke andar check kar rahe ho kya kya items hain (key-value).
let bag = { book: "Maths", pen: "Blue", bottle: "1L" };

for (let item in bag) {
  console.log(item + " => " + bag[item]);
}

//Break / Continue 
//Aap 5 doston ko call kar rahe ho, lekin Ravi unavailable hai.

let friend = ["Amit", "Neha", "Ravi", "Pooja", "Suresh"];

for (let name of friend) {
  if (name === "Ravi") {
    console.log("Skipping Ravi, he's busy.");
    continue;
  }
  console.log("Calling " + name);
}

//Real-life logic: Bag ke andar har cheez ka naam aur uska type dekh rahe ho — works with for...in.

// for	- Invite sab doston ko
// while -	Tank bharna jab tak full na ho
// do...while - ATM PIN daalna at least once
// for...of -	Messages read karna one by one
// for...in -	Bag ke items dekhna
// continue -	Busy friend ko skip karna