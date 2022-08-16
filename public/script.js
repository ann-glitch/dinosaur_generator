console.log("loading js");

//getting the dinosaur names from the router.
async function getName() {
  try {
    const response = await fetch("/dinoname");
    const data = await response.json();
    let dinoName = data[0].join(" ");
    console.log(dinoName);

    let dinoNameDiv = document.createElement("div");
    dinoNameDiv.id = "dinoname";
    dinoNameDiv.textContent = dinoName;
    document.querySelector(".divWrapper").appendChild(dinoNameDiv);
  } catch (err) {
    console.log(err);
  }
}

//getting the dinosaur images from the router.
async function getImages() {
  try {
    const response = await fetch("/dinoimages");
    const data = await response.json();
    let dinoImages = data.value[Math.floor(Math.random() * data.value.length)];
    let imageUrl = dinoImages.thumbnailUrl;
    let imageAlt = dinoImages.name;
    console.log(dinoImages);

    let img = document.createElement("img");
    img.id = "dino-images";
    img.src = imageUrl;
    img.alt = imageAlt;
    document.querySelector(".divWrapper").appendChild(img);
  } catch (err) {
    console.log(err);
  }
}

//generates and removes names and images  of dinosaurs on click.
const reloadBtn = document.querySelector("#reload-btn");
reloadBtn.addEventListener("click", () => {
  if (document.querySelector("#dinoname") !== null) {
    document.querySelector("#dinoname").remove();
  }

  if (document.querySelector("#dino-images") !== null) {
    document.querySelector("#dino-images").remove();
  }

  getName();
  getImages();
});
