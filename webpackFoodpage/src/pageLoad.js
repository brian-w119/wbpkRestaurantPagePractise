
import location from './location.js';

export default function basicLayout(){

    //create and style heading
    const heading = document.createElement("h1");
    heading.innerHTML   = "Food 2 Go";
    heading.className   = "temporaryContent";
    heading.style.color = "red";
    heading.style.textAlign = "center";
    heading.style.marginTop = "40px";
    heading.style.marginBottom = "40px";

    //attach heading to div "content"
    const content = document.querySelector("#content");
    content.appendChild(heading);

    //add image image to screen
    const image = document.createElement("img");
    image.className = "temporaryContent";
    image.src   = "https://github.com/brian-w119/my-images/blob/main/fishTea.png?raw=true";
   // image.style.maxWidth = "100%";
   // image.style.height   = "auto";
    image.style.display = "flex";
    content.appendChild(image);
};