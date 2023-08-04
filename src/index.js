import "./style.css";
import menuContent from "./menu";
import aboutContent from "./about";
import contactContent from "./contact";

console.log("Working!");

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(aboutContent());

let menuButton = document.querySelector(".nav-btn.menu");
menuButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(menuContent());
});

let aboutButton = document.querySelector(".nav-btn.about");
aboutButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(aboutContent());
});

let contactButton = document.querySelector(".nav-btn.contact");
contactButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(contactContent());
});
