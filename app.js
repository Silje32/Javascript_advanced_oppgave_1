const image = document.querySelector("#img");

// Added click eventlistener
image.addEventListener("click", () => {
  picture();
});

// Added keydown eventlistener
image.addEventListener("keydown", () => {
  picture();
});

function picture() {
  console.log("Picture of my Pet");
}
