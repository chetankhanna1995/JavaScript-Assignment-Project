let userInput=document.getElementsByClassName("userInput")[0];

let btn=document.getElementsByClassName("btn")[0];

let result=document.getElementsByClassName("result")[0];

btn.addEventListener("click", palindromeCheck);

function palindromeCheck(){
        let check= userInput.value;
        let input= String(userInput.value).split("");
        let reverseinput=input.reverse().join("");
        
        if(check==reverseinput){
            result.textContent="Palindrom";
        }
        else{
            result.textContent="Not Palindrom";
        }

    }
