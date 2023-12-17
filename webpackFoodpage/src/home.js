
import basicLayout from './pageLoad.js';
import menu from './menu.js';
import location from './location.js';

export default function renderHomePage(){

    const container  = document.querySelector("#content");
    const homeButton = document.createElement("button");

    buttonCreate();
    homeButton.addEventListener("click", () => {
        container.innerHTML = "";
        location();
        menu();
        buttonCreate();
        basicLayout();
    });

    function buttonCreate(){
        homeButton.type  = "button";
        homeButton.style.backgroundColor = "lightBlue";
        homeButton.innerHTML = "Home";
        homeButton.style.position = "fixed";
        homeButton.style.top = "5px";
        homeButton.style.left = "150px";
        container.appendChild(homeButton);
       
    };
    

};