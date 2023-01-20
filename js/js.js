
const clickMe = document.querySelector(".btn");
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;
let a = 1;
function f (){
    if(a===1){
        timerId = setInterval(() => {
        clickMe.style.backgroundColor = getRandomHexColor();
        }, 300);
        a=0;
    }else{
        clearTimeout(timerId); 
        clickMe.style.backgroundColor = "transparent"
        a=1;
    }       
}
clickMe.addEventListener('click', f);

