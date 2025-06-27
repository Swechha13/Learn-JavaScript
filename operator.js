let a=45;
let b=4;
console.log('a+b=',a+b)
console.log('a-b=',a-b)
console.log('a*b=',a*b)
console.log('a/b=',a/b)
console.log('a**b=',a**b)
console.log('a%b=',a%b)
// console.log('a++=',a++) //abhi to same hi value print hogi but ab jb bhi a ko print krenge to 1 increase hoke print hogi value
console.log('++a=',++a)//value print 46 now value of a is 46
console.log('a++=',a++)
// console.log('a=',a)//value of a is 47
console.log('--a=',--a)//print 46
console.log('a--=',a--)//value 46
console.log('a=',a)//print 45

//assignment operator
let assign=1;
assign +=5;// same as assign = assign + 5
assign -=5;
console.log(assign)

//comparison operator
let comp1=6;
// let comp2=6;
let comp2="6";
console.log("comp1==comp2 is ",comp1==comp2)//value check kr ki same hai to teue retirn kra
console.log("comp1!=comp2 is ",comp1!=comp2)
console.log("comp1===comp2 is ",comp1===comp2)// but isme type bhi chack kra ki string hai to uasne return kra ki dono equal nhi hai so result is false
console.log("comp1!==comp2 is ",comp1!==comp2)

//logical operator
let x=5;
let y=6;
console.log(x<y && x==5) // both condition should be true
console.log(x<y || x==6)// dono m se koi bhi condition true hogi to true return krega

