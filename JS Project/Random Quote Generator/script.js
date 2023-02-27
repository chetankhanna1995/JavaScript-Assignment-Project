let quote=document.querySelector(".quote");

let url='https://dummyjson.com/quotes/random';



fetch(url).then((info)=>info.json())
.then((result)=>{
    quote.textContent=result.quote;
        
})
.catch((error)=>{
    quote.textContent=error.value;
})
