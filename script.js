function previewImage(event) {
  const fileInput = event.target;
  const files = fileInput.files;

  const imageContainer = document.getElementById("image-container");

  for (const file of files) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = document.createElement("img");
      image.src = e.target.result;
      imageContainer.appendChild(image);
    };

    reader.readAsDataURL(file);
  }
}

// You can add more JavaScript functionality here if needed
console.log("XTEN RPL 1 website script loaded!");
