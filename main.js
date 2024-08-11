let myHeader = document.createElement("div");
let pageTitle = document.createElement("h2");
let fastLinks = document.createElement("ul");

pageTitle.innerHTML = "Mazen"

pageTitle.style.color = "black"

fastLinks.innerHTML = "<li>Home</li><li>About</li><li>Service</li><li>Contact</li>";

fastLinks.style.cssText = "display:flex; gap:20px;list-style: none;cursor:pointer;padding-top:10px"

myHeader.style.cssText = "display:flex; justify-content: space-between; padding-inline: 25px;background-color:#eeee;color:gray;"

myHeader.appendChild(pageTitle)
myHeader.appendChild(fastLinks)

document.body.appendChild(myHeader);

let container = document.createElement('div');

container.style.cssText= "display:flex; flex-wrap:wrap;justify-content:space-between;width:100%;height:100%"

document.body.appendChild(container);




for(i=0; i < 16; i++ ){
    for(productNumber = 0 ; productNumber < i; productNumber++){
        
    }
    
    let productHolder = document.createElement("div");
    let productIndex = document.createElement("h1");
    let productName = document.createElement("span");    
    
    productHolder.style.cssText= "display:flex; justify-content:space-around;flex-direction:column; margin-top:25px;align-items: center;background-color:gray; width:400px; height:200px";
    
    productHolder.appendChild(productIndex).textContent = `${productNumber +1}`;
    productHolder.appendChild(productName).textContent = `Product`;
    
    
    container.appendChild(productHolder);

}

let footer = document.createElement("footer");

footer.innerHTML = "Mazen Mohamed @2024"

footer.style.cssText = "background-color:#04AA6D;color:white;width:95%;padding:45px;display:flex;justify-content:center;align-items: center; margin-top:15px;overflow:hidden"

document.body.appendChild(footer);