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

  let heroCenterDiv = document.createElement("div");
  heroCenterDiv.classList.add("hero-center");
  heroContainer.appendChild(heroCenterDiv);

  return heroContainer;
};

export default homeContent;
