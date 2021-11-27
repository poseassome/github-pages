const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
const bodybg = document.body;
const bgimg = `img/${chosenImage}`;
bodybg.style.background = "url(" + bgimg + ") no-repeat";
bodybg.style.backgroundAttachment = "fixed";
bodybg.style.backgroundSize = "cover";