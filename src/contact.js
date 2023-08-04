const contactContent = () => {
  let contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  contactContainer.textContent = "This is the contact page!";
  return contactContainer;
};

export default contactContent;
