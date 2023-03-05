const images = [
  "css/img/background1.jpg",
  "css/img/background2.jpg",
  "css/img/cardbackground.jpg",
  "css/img/git.png",
  "css/img/redirection.png",
  "css/img/whats.png"
];

let loadedImages = 0;

for (let i = 0; i < images.length; i++) {
  const img = new Image();
  img.src = images[i];
  img.onload = imageLoaded;
}

function imageLoaded() {
  loadedImages++;
  if (loadedImages === images.length) {
    setTimeout(showPageContent,500);
  }
}

function showPageContent() {
  const load = document.querySelector("#load");
  load.style.display = "none";
  const pageContent = document.querySelector("#content");
  pageContent.style.display = "block";
}