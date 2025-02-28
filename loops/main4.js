// 1
// for(let i=1;i<=10;i++){
// console.log(i);
// }

// 2
// let i=1;
// while(  i<=10){
//     console.log(i);
//     i++
// }

// 3
// let array=[1,2,3,4,5,6]
// for(let i=0;i<=array.length;i++){
//     console.log(i);
// }

// 4
// let array=[1,2,3,4,4,5,6]
// for(let i=0;i<array.length;i++){
//     if(array[i]%2==0){
//         console.log(array[i]);
//     }
// }

// 5
// let sum=0
// let num=10
// for(let i=1;i<=num;i++){
//     sum +=i
// }
// console.log(sum);

// 6
// let array=[1,23,4,40,5]
// let maxNumber=array[0]
// for(let i=1;i<=array.length;i++){
//    if(array[i]>maxNumber){
//     maxNumber=array[i]
//    }
// }
// console.log(maxNumber);

// 7
// let array=[1,2,4,5,7]
// let minNumber=array[0]
// for(let i=1; i<array.length;i++){
//     if(array[i]<minNumber){
//         minNumber=array[i]
//     }
// }
// console.log(minNumber);

// 8
// let array=[1,2,3,4,5,6]
// let sum=0
// let avarge=0
// for(let i=0;i<array.length;i++){
//     sum += array[i]
// }
// avarge =sum /array.length
// console.log(avarge);

// 9
// let n=5
// let result=1
// for(let i=1;i<=n;i++){
//     result *=i
// }
// console.log(result);

// 10
// let n=10
// let a=0
// let b=1
// console.log(a);
// for(let i=1;b<=n;i++){
//     console.log(b);
//     let next=a+b
//     a=b
//     b=next
// }

// 11
// let n=20
// for(let i=2;i<=n;i++){
// let isPrime=true
// for(let j=2;j<=Math.sqrt(i);j++){
//     if(i%j===0){
//         isPrime=false
//         break
//     }
// }
// if (isPrime){
//     console.log(i);
// }
// }

// 12
// let input=5
// let n=10
// for(let i=1;i<=n;i++){
//     console.log(input + " * "+i+" = " + (input*i));
// }

// 13
// let arrays= [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for(let i=0;i<arrays.length;i++){
//     for(let j=0;j<arrays[i].length;j++){
//         console.log(arrays[i][j]);
//     }
// }

// // 14
// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);  
// }
// console.log(reversedArray);  

// 15
// let array=[10, 20, 30, 40, 50, 60, 70]
// let startIndex=2
// let endIndex=4
// for(let i=startIndex;i<=endIndex;i++){
//     console.log(array[i]);
// }

// 16
// let array=[1,2,3,4,5]
// for (let i=0;i<=array.length;i+=2){
//     console.log(array[i]);
// }

// 17
// let n=3
// let array=[1,2,3,4]
// for(let i=0;i<=array.length;i++){
//     if(array.includes(n)){
//         console.log(n);
//         break
//     }
// }

// 18
// let array=[1,2,3,1,]
// let targetNumber=1
// let count=0
// for(let i=0;i<=array.length;i++){
//     if(array[i]===targetNumber){
//       count++
//     }
// }
// console.log(count);