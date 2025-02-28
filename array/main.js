// var myarray=["loma",25,]
let myarray = []

// myarray[0]="loma";
// myarray[1]=23;
// myarray[2]=true;
// myarray[3]=79.9;
// console.log(myarray);

myarray[0]="loma"
myarray[1]=23
myarray[2]=true
myarray[3]= 34.3
console.log(myarray.length-5);
myarray.push("asu")
console.log(myarray);
myarray.unshift("asu")
console.log(myarray);
myarray.pop()
console.log(myarray);
myarray.shift()
console.log(myarray);

delete myarray[1]
console.log(myarray);
myarray[1]="lolo"
console.log(myarray);
myarray.reverse()
console.log(myarray);
//obj = key+ value



// let array=["loma","thogan","shafiq","alshraideh"]
// array.pop()
// console.log(array);
// array.unshift("lolo")
// console.log(array);

var myobj={
    namee:"loma",
    age:22,
    watching:true,
    myarr:["chess","coding"],
    drinks:{
        hot:"tea",
        cold:"ice tea"
    },
    myFunction:function(){
        return  "lolo"
    }
}
console.log(myobj.namee,myobj.age,myobj.myarr[0],myobj.drinks.hot);



let newObj={
name:"smsm",
from:"irbid",
hoppy:["gym","riding"],
newFunction:function(){
    return "second obj"
},

}
newObj.food="rice"
console.log(newObj);
console.log(newObj.newFunction());