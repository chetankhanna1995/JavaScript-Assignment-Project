# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./Pic2.png)

### Code:- 
## let headingText=document.querySelector(".crayons-subtitle-2").innerHTML="iNeuron";
## let bodyText=document.querySelector(".color-base-70").innerHTML="I Write Code";

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### Code:-
## let product=document.querySelectorAll(".as-imagegrid-wrapper .as-imagegrid-item")
## let productList=[]
## product.forEach((e)=>{productList.push(e.innerText)})

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./Pic5.png)

### Code:-

## let parent=document.querySelector(".accordion-homepage");
## let secondParent=document.createElement("section");
## secondParent.classList="parent";
## let h3Tag=document.createElement("h3")
## h3Tag.textContent="My New FAQ";
## parent.appendChild(secondParent)
## secondParent.appendChild(h3Tag)


4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./Pic6.png)

### Tasks

      Change the contact number

### Output

![Output](./Pic7.png)

### Code
## let contactNo=document.querySelector(".item--subtitle").innerText="+91 6366256689"


5. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image


![Sample One](./Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

![Output](./Pic11.png)

### Code:-
## let inp=document.querySelector("._input_1f3oz_13")
## inp.addEventListener("mousemove", ()=>{document.querySelector("._input_1f3oz_13").style.backgroundColor="red"})





6. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image


![Sample One](./Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

![Output](./Pic19.png)

## let btn=document.querySelector(".btn-cta-big .login-btn-text")
## function bgColor(){btn.style.backgroundColor="red"}
##  btn.addEventListener("mouseover", bgColor)

7. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./Pic20.png)

### Tasks

    change the realme logo to ineuron logo

### Output

![Output](./Pic21.png)

### Code:-
## let logo=document.querySelector(".logo .icon-logo") 
## logo.style.backgroundImage="url(https://ineuron.ai/images/ineuron-logo.png)"

