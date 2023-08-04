import "./style.css";
import menuContent from "./menu";
import aboutContent from "./about";
import contactContent from "./contact";
import homeContent from "./home";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(homeContent());

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

let homeButton = document.querySelector(".nav-btn.home");
homeButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(homeContent());
});

let contactButton = document.querySelector(".nav-btn.contact");
contactButton.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(contactContent());
});
