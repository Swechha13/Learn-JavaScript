//.map() use hota hai array ke har element ko badalne (transform karne) ke liye, aur ek naya array return karta hai.

//Aapke paas ek product list hai, aur aap chahte ho ki har product ke naam me “Handmade” jod diya jaye for branding.

let products=["keychain","rakhi","bookmark","earrings"]
let updatedProducts=products.map(item=>`handmade ${item}`);
console.log(updatedProducts)

//Filter method

//.filter() JavaScript ka array method hai jo array ke un elements ko nikalta hai (filter karta hai) jo ek condition ko true karte hain.Ye bhi ek naya array return karta hai — original array change nahi hota.
let prices = [49, 99, 149, 249, 75];
let expensiveItems = prices.filter(price => price > 100);
console.log(expensiveItems); // Output: [149, 249]