
import basicLayout from "./pageLoad.js";
import menu from './menu.js';
import homeButtonCreate from './home.js';

export default function location(){
    
    const container = document.querySelector("#content");
    const locationButton = document.createElement("button");

    locationButton.addEventListener("click", ()=> {
        container.innerHTML = "";
        //creates buttons
        createLocationButton();
        menu();
        homeButtonCreate();

        //creates and positions map
        const locationMap = document.createElement("img");
        locationMap.src = "https://github.com/brian-w119/my-images/blob/main/Port%20Antonio.png?raw=true";
        locationMap.style.display= "flex";
        locationMap.style.position = "relative";
        locationMap.style.left = "35vw";
        locationMap.style.top = "20vh";
        container.appendChild(locationMap);

        const text = document.createElement("p");
        text.innerHTML = "We are located along the A4 on coast in Port Antonio.";
        container.appendChild(text);

    });

    function createLocationButton(){
        locationButton.type  = "button";
        locationButton.style.backgroundColor = "lightBlue";
        locationButton.innerHTML = "Find Us";
        locationButton.style.position = "fixed";
        locationButton.style.top = "5px";
        container.appendChild(locationButton);
    };
    createLocationButton();
};
