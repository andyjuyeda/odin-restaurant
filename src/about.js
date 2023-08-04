const aboutContent = () => {
  let aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  let copyDiv = document.createElement("div");
  copyDiv.classList.add("copy");
  aboutContainer.appendChild(copyDiv);

  let pTag1 = document.createElement("p");
  pTag1.textContent =
    "Welcome to Kyoto Pearl, Portland's hidden gem tucked away in the vibrant Pearl District. With us, you'll discover the heart and soul of traditional Japanese cuisine in a warm and intimate setting.";
  let pTag2 = document.createElement("p");
  pTag2.textContent =
    "Kyoto Pearl takes you on a culinary journey to the streets of Kyoto. Our expert chefs, trained in the age-old traditions of Japanese cooking, craft dishes that honor the simplicity and profound depth of flavors found in Japanese cuisine. Every item on our menu, from the finest sushi to the comforting ramen, is a tribute to Japan's culinary heritage.";
  let pTag3 = document.createElement("p");
  pTag3.textContent =
    "Each ingredient used at Kyoto Pearl is meticulously sourced. We celebrate the Pacific Northwest's bountiful produce while integrating special ingredients flown directly from Japan. The result is a unique blend of cultures that harmoniously converge on your plate.";
  let pTag4 = document.createElement("p");
  pTag4.textContent =
    "Our cozy, understated ambiance is a tribute to the Japanese philosophy of 'wabi-sabi', embracing the beauty in imperfection. The rustic charm of our space invites you to sit back, relax, and engage in the mindful act of savoring your meal.";
  let pTag5 = document.createElement("p");
  pTag5.textContent =
    "To complement your dining experience, we offer a carefully curated selection of sake and Japanese beers. Our knowledgeable staff are always eager to help you navigate our offerings and pair the perfect beverage with your meal.";
  let pTag6 = document.createElement("p");
  pTag6.textContent =
    "At Kyoto Pearl, we don't just serve food; we offer an authentic and heartwarming experience that resonates with the tranquility of a Japanese teahouse. Join us for an unforgettable meal and discover why Kyoto Pearl is Portland's favorite secret.";

  copyDiv.appendChild(pTag1);
  copyDiv.appendChild(pTag2);
  copyDiv.appendChild(pTag3);
  copyDiv.appendChild(pTag4);
  copyDiv.appendChild(pTag5);
  copyDiv.appendChild(pTag6);
  return aboutContainer;
};

export default aboutContent;
