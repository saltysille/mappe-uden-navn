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
    window.location.href = `liste.html?category=${category}`;

    document.querySelector(".wrapper img").appendChild(clone);
  });
});

const url = "https://szmeszolzqvldfshrvhu.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ",
  fetch = (url + "/rest/v1/vildmad?select=id",
  {
    method: "GET",
    headers: {
      apikey: key,
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
