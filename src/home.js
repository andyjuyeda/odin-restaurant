const homeContent = () => {
  let heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  let portraitDiv1 = document.createElement("div");
  portraitDiv1.classList.add("portrait1");
  heroContainer.appendChild(portraitDiv1);

  let portraitDiv2 = document.createElement("div");
  portraitDiv2.classList.add("portrait2");
  heroContainer.appendChild(portraitDiv2);

  let landscapeDiv1 = document.createElement("div");
  landscapeDiv1.classList.add("landscape1");
  heroContainer.appendChild(landscapeDiv1);

  let landscapeDiv2 = document.createElement("div");
  landscapeDiv2.classList.add("landscape2");
  heroContainer.appendChild(landscapeDiv2);

  let heroTextDiv = document.createElement("div");
  heroTextDiv.classList.add("hero-text-div");
  let heroText = document.createElement("h1");
  heroText.textContent = "Kyoto Pearl";
  heroText.classList.add("hero-text");
  heroTextDiv.appendChild(heroText);
  heroContainer.appendChild(heroTextDiv);

  return heroContainer;
};

export default homeContent;
