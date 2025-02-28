const text=document.querySelector("textarea");
const bold=document.querySelector(".bold");
const italic=document.querySelector(".italic");
const left=document.querySelector(".left");
const center=document.querySelector(".center");
const right=document.querySelector(".right");
const upper=document.querySelector(".upper");
const lower=document.querySelector(".lower");
const Cap=document.querySelector(".Cap");
const clear = document.querySelector(".clear");



bold.addEventListener("click" ,()=>{
    if(text.style.fontWeight==="bold"){
        text.style.fontWeight=
        "normal"
    }else{
        text.style.fontWeight="bold"
    }
})

italic.addEventListener("click",()=>{
    if(text.style.fontStyle==="italic"){
        text.style.fontStyle="normal"
    }else{
        text.style.fontStyle="italic"
    }
})

left.addEventListener("click",()=>{
text.style.textAlign="start"
})

center.addEventListener("click",()=>{
    text.style.textAlign="center"
})

right.addEventListener("click",()=>{
    text.style.textAlign="right"
})
upper.addEventListener("click",()=>{
    text.style.textTransform="uppercase"
})
lower.addEventListener("click",()=>{
    text.style.textTransform="lowercase"
})
Capitalize.addEventListener("click",()=>{
    text.style.textTransform="Capitalize"
})

clear.addEventListener("click", () => {
    text.value = ""; 
});