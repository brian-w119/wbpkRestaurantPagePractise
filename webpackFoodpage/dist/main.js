(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("button");t.style.backgroundColor="lightBlue",t.innerHTML="Menu",t.style.marginRight="5px",t.style.position="fixed",t.style.top="5px",t.style.left="85px",e.appendChild(t),t.addEventListener("click",(()=>{document.querySelector("img").remove(),document.querySelector("h1").remove();const t=document.createElement("div");t.style.marginTop="60px";const n=document.createElement("p");t.appendChild(n),n.innerHTML="Our main delicasies are:";const o=["Jerked Chicked","Curried Goat","Fried Fish","Steamed Fish","Jerked Pork","Rice & Peas","Fish Soup"];for(let n=0;n<o.length;n++){const i=document.createElement("li");i.innerHTML=o[n],t.appendChild(i),e.appendChild(t)}const i=document.createElement("img");i.style.width="50%",i.style.height="auto",i.src="https://github.com/brian-w119/my-images/blob/main/collageFood.png?raw=true",i.style.marginLeft="20%",i.style.marginRight="20%",i.style.marginTop="8vh",e.appendChild(i)}))}function t(){const e=document.createElement("h1");e.innerHTML="Food 2 Go",e.className="temporaryContent",e.style.color="red",e.style.textAlign="center",e.style.marginTop="40px",e.style.marginBottom="40px";const t=document.querySelector("#content");t.appendChild(e);const n=document.createElement("img");n.className="temporaryContent",n.src="https://github.com/brian-w119/my-images/blob/main/fishTea.png?raw=true",n.style.display="flex",t.appendChild(n)}function n(){const n=document.querySelector("#content"),i=document.createElement("button");function l(){i.type="button",i.style.backgroundColor="lightBlue",i.innerHTML="Home",i.style.position="fixed",i.style.top="5px",i.style.left="150px",n.appendChild(i)}l(),i.addEventListener("click",(()=>{n.innerHTML="",o(),e(),l(),t()}))}function o(){const t=document.querySelector("#content"),o=document.createElement("button");function i(){o.type="button",o.style.backgroundColor="lightBlue",o.innerHTML="Find Us",o.style.position="fixed",o.style.top="5px",t.appendChild(o)}o.addEventListener("click",(()=>{t.innerHTML="",i(),e(),n();const o=document.createElement("img");o.src="https://github.com/brian-w119/my-images/blob/main/Port%20Antonio.png?raw=true",o.style.display="flex",o.style.position="relative",o.style.left="35vw",o.style.top="20vh",t.appendChild(o);const l=document.createElement("p");l.innerHTML="We are located along the A4 of coast in Port Antonio.",t.appendChild(l)})),i()}document.querySelector("body").style.boxSizing="border-box",o(),e(),n(),t()})();