const menuContent = () => {
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  menuContainer.textContent = "This is the menu page!";
  return menuContainer;
};

export default menuContent;
