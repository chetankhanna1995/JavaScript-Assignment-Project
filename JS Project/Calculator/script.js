let string="";
let buttons=document.querySelectorAll(".button");

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.value=="="){
            string=eval(string)
            document.querySelector(".textview").value=string;
        }
        else if(e.target.value=="AC"){
            document.querySelector(".textview").value="";
        }

        else if(e.target.value=="Back"){
            string=string.slice(0, string.length-1);
            document.querySelector(".textview").value=string;
        }
        else{
            string=string+e.target.value;
            document.querySelector(".textview").value=string;
        }
    })
})