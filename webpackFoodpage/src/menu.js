import basicLayout from "./pageLoad.js";


export default function menu(){
    const container  = document.querySelector("#content");
    const menuButton = document.createElement("button");
    menuButton.style.backgroundColor = "lightBlue";
    menuButton.innerHTML = "Menu";
    menuButton.style.marginRight = "5px";
    menuButton.style.position = "fixed";
    menuButton.style.top = "5px";
    menuButton.style.left = "85px";
    container.appendChild(menuButton);
 
    //removes text and images from the screen 
    menuButton.addEventListener("click", () => {
        
        const image = document.querySelector("img");
        image.remove();

        const title = document.querySelector("h1");
        title.remove();

        const menuDiv = document.createElement("div");
        menuDiv.style.marginTop = "60px";
        const para = document.createElement("p");
        menuDiv.appendChild(para);
        para.innerHTML = "Our main delicasies are:"
        const list = ["Jerked Chicked", "Curried Goat", "Fried Fish", "Steamed Fish", "Jerked Pork", "Rice & Peas", "Fish Soup"];
        for(let i = 0; i < list.length; i++){
            const item = document.createElement("li");
            item.innerHTML = list[i];
            menuDiv.appendChild(item);
            container.appendChild(menuDiv);
        };

        const collage = document.createElement("img");
        collage.style.width = "50%"
        collage.style.height = "auto";
        collage.src = "https://github.com/brian-w119/my-images/blob/main/collageFood.png?raw=true";
        collage.style.marginLeft = "20%";
        collage.style.marginRight= "20%";
        collage.style.marginTop = "8vh";
        container.appendChild(collage);

       // container.style.backgroundImage.src  = 'https://github.com/brian-w119/my-images/blob/main/sunset.png?raw=true';
    });
};