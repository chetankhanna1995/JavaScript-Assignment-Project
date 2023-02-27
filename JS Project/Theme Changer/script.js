let btn=document.querySelector("#colorChanger")
        btn.addEventListener("click", colorChangerFunction);

        function colorChangerFunction(){
            if(btn.value=="Dark Mode")
            {   
                btn.value="Light Mode";
                document.body.style.backgroundColor="#747070"
            }
            else{
                document.body.style.backgroundColor="#FFFFFF"
                btn.value="Dark Mode";
            }
        }