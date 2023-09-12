/* const imageElements = document.querySelectorAll(".img_forside");

imageElements.forEach((img) => {
  img.addEventListener("click", handleImageClick);
});

function handleImageClick(event) {
  // Get the clicked image element
  const clickedImage = event.target;

  console.log(event);

  // Extract data from the clicked image (for example, alt attribute)
  const imageData = {
    alt: clickedImage.alt,
    src: clickedImage.src,
  };
  fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ",
  },
})
}

  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  console.log(cats);
  cats.forEach(showCategory);
}

function showProducts(products) {
  products.forEach(showProduct);
} */
// Get all the image elements with class "img_forside"
const imageElements = document.querySelectorAll(".img_forside");

// Add a click event listener to each image
imageElements.forEach((img) => {
  img.addEventListener("click", function () {
    // Determine which image was clicked by its alt attribute
    const altText = img.alt;
    console.log(img);

    // Redirect to "liste.html" and pass the alt text as a query parameter
    window.location.href = `liste.html?image=${encodeURIComponent(altText)}`;
  });
});
fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ",
  },
})
  .then((res) => res.json())
  .then(showCategories);
