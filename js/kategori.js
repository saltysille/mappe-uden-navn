// Get all the image elements with class "img_forside"
const imageElements = document.querySelectorAll(".img_forside");

// Add a click event listener to each image
imageElements.forEach((img) => {
  img.addEventListener("click", function () {
    // Determine which image was clicked by its alt attribute
    const altText = img.alt;
    console.log(img);

    // Determine the category based on the clicked image (adjust this logic as needed)
    let category = "";

    // Redirect to "liste.html" and pass the alt text and category as query parameters
    window.location.href = `liste.html?category=${img.category}`;

    document.querySelector(".wrapper img").appendChild(clone);
  });
});
fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad/categories/0/name", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ",
  },
})
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  console.log(cats);
  cats.forEach(showCategory);
}

function showProducts(products) {
  products.forEach(showProduct);
}
