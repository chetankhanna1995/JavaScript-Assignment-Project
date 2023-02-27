let userText=document.querySelector("#userText");
let count=document.querySelector(".output-Count #count");

userText.addEventListener("input", countcharacter);

function countcharacter(){
    let characterLength=userText.value;
    count.textContent=characterLength.length;
}