const image = document.querySelector("#img");

// Added click eventlistener
image.addEventListener("click", () => {
  picture();
});

function picture() {
  console.log("Picture of my Pet");
}
