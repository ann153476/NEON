function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function f (){
    let number = Number(myinput.value);
    console.log(number);
    
    for(let i = 0;i<number;i++){
    const markup = `<div class="div_"></div>`;    
    mydiv__pum.insertAdjacentHTML("beforeend", markup);}
}
function p(){
    dive.style.backgroundColor = getRandomHexColor();
}

const mydiv__pum = document.querySelector(".mydiv__pum");
const myinput = document.querySelector(".myinput");
const dive = document.querySelector(".dive");

myinput.addEventListener('change', f);
myinput.addEventListener('mouseover', p);
