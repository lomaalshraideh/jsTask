console.log(typeof(100))
console.log(typeof(73.9));
console.log(typeof(NaN));
console.log(typeof(false));
console.log(9 != 11 );
console.log("Orang" + "e" );
console.log("Orange" - "s" );
console.log("4" + "8" );
console.log("4" - "8" );	
console.log("name" + 3 );	
console.log("name" - 3 );	
console.log(82 * "word" );
console.log(1 + "hello" );	
console.log("hello" + 1 );	
console.log(1 + true );	
console.log("hello" + true );	
console.log(typeof (Infinity) ); 
console.log(1 == '1'); 
console.log(1 === '1' );
//------------------------------------------------------
let x="Welcome to Orange"
let Upper=x.toUpperCase()
console.log(Upper);
let to=x.split(" ")
let word=to[1]
console.log(word);
let hello=x.replace(/Welcome/g,"Hello")
console.log(hello);
let lower=x.toLowerCase()
console.log(lower);
let num=x.length
console.log(num);
let double=x.replace("Orange",'"Orange"')
console.log(double);
let add=x +" Jordan"
console.log(add);
// ----------------------------------------------------
 let a=["Coding","Academy","By","Orange"]
let pluse=a + " jordan"
console.log([pluse]);
let c= "welcome," + a
console.log([c]);
let del=a.splice(0,2)
console.log(del);
let dell=a.splice(0)
console.log(dell);

// function findSmallestNumber(arr){
//     let smallest=arr[0]
//     for(i=1;i<arr.length;i++){
//         if(aii[i]< smallest){
//             smallest=arr[i]
//         }
//     }
//     return smallest
// }
// const number=[30,45,60,7]
// console.log(findSmallestNumber(number));