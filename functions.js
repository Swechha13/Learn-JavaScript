function oneplusavg(x,y)// a and b ki value yha copy hogi locally 
{
    return 1+(x+y)/2 
    console.log("done")
}

//Arrow Function
const sum=(p, q)=>{
    return p+q
}
let a=1;
let b=2;
let c=3;
console.log("one plus average of a and b is", oneplusavg(a,b))
console.log("one plus average of b and c is", oneplusavg(b,c))
console.log("one plus average of c and a is", oneplusavg(c,a))
console.log(sum(5,5))