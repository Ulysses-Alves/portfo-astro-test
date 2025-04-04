const modal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const artwork = document.querySelectorAll("#zoom-high-res");
const closeBtn = document.getElementById("closeModal");

artwork.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      let imageSrc = thumbnail.src; // Get thumbnail src
      let highResSrc = imageSrc.replace(".jpg", ".png"); // Replace .jpg with .png
  
      fullImage.src = highResSrc; // Set high-res image source
      modal.classList.remove("hidden");
    });
  });

// Close modal when clicking the close button
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
