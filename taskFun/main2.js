// 1
// function findSmallestNumber(arr){
//     let smallest=arr[0]
//     for(i=1;i<arr.length;i++){
//         if(arr[i]< smallest){
//             smallest=arr[i]
//         }
//     }
//     return smallest
// }
// const number=[30,45,60,7]
// console.log(findSmallestNumber(number));

// 2
// function AlphabeticalOrder(str) {
// return str.split('').sort().join('')
// }
// const inputString="loma"
// const orderString=AlphabeticalOrder(inputString)
// console.log(orderString);

// 3
// function factorial(n){
//     let result=1;
//     for(let i=n;i>1;i--){
//         result *=i
//     }
//     return result
// }

// console.log(factorial(8));

// 4
// function oddOrEven(n){
//     if(n%2===0){
//         return "this is even number"
//     }
//     else {
//         return "this is odd number"
//     }
// }
// console.log(oddOrEven(9));

// 5
// function evenNum(n){
//     let evenArray=[]
// for(let i=0;i<n.length;i++){
//     if(n[i]%2===0){
//         evenArray.push(n[i])
//     }
 
// }
// return evenArray
// }
// array=[1,2,3,4,6,7,8]
// console.log(evenNum(array));

// 6
// function onlyNum(n){
//     let number=[]
//     for(let i=0;i<n.length;i++){
//     if(typeof n[i]==="number"){
//         number.push(n[i])
//     }
// }
//     return number
// }
// let mix=["loma",23,66,"hala","narmeen",87]
// console.log(onlyNum(mix));

// 7
// function addNum(n){
//     let num=0;
//     for(i=0;i<n.length;i++){
//     num += n[i]
//     }
//     return num
// }
// add=[3,4,6,88]

// console.log(addNum(add));

//8
// function Array2(n){
//     let lowest=Math.min(...n)
//     let highest=Math.max(...n)
//     let length=n.length
//     let avarge=n.reduce((sum,num)=> sum+num,0)/length
//     let newArray=[lowest,highest,length,avarge]
//     return newArray
//     }
// let l=[5,89,7,4,6,]
// console.log(Array2(l));

// 9
// function ruman(num){
//     if(num<=0|| num >=4000) return "Invaild Number"
//     const romanNumerals = [
//         { value: 1000, symbol: "M" },
//         { value: 900, symbol: "CM" },
//         { value: 500, symbol: "D" },
//         { value: 400, symbol: "CD" },
//         { value: 100, symbol: "C" },
//         { value: 90, symbol: "XC" },
//         { value: 50, symbol: "L" },
//         { value: 40, symbol: "XL" },
//         { value: 10, symbol: "X" },
//         { value: 9, symbol: "IX" },
//         { value: 5, symbol: "V" },
//         { value: 4, symbol: "IV" },
//         { value: 1, symbol: "I" }
//     ];
//     let result="";
//     for(let i=0;i<romanNumerals.length;i++){
//         while (num >=romanNumerals[i].value){
//             result +=romanNumerals[i].symbol
//             num -=romanNumerals[i].value
//         }
//     }
//     return result
// }
// console.log(ruman(1999));

//10
// function countWords(w){
//     let word=w.trim().split(/\s+/)
//     return word.length
// }
// let l=("loma thogan  shafiq alshraideh")
// console.log(countWords(l));

//11
// function multiply(n){
//     let newArray=[]
//     let length=n.length
//     for(let i=0;i<length;i++){
//         let multiplys=n[i]*length
//         newArray.push(multiplys)
//     }
//     return newArray
// }
// let l=[1,3,5,7,10]
// console.log(multiply(l));

//12
// function end(str1,str2){
//     return str1.endsWith(str2)
// }
// console.log(end("loma","shraideh"));

//13
// function double(str){
//     return str.split('').map(char =>char.repeat(2)).join('')
// }
// console.log(double("loma"));

//14
// function findIndex(arr,elem){
//     return arr.indexOf(elem)
// }
// console.log(findIndex([4,7,9],10));
// console.log(findIndex(["loma","alma"],"loma"));

//15
// function absNum(n){
//     let sum=0
//     for(let i=0;i<n.length;i++){
//         sum +=n[i]
//     }
//     let absNumber=Math.abs(sum)
//     return absNumber
// }
// let l=[-1,7.-3,-10]
// console.log(absNum(l));