const dict = {
  image1: "images/image1_2.jpg",
  image2: "images/image2_2.jpg",
  image3: "images/image3_2.jpg",
  image4: "images/image4_2.jpg",
  image5: "images/image5_2.jpg"
};

document.addEventListener("mouseover", event => {
  const image_id = event.target.getAttribute("id");

  if (image_id in dict) {
    event.target.src = dict[image_id];
  }
});
