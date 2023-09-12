// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get(category);

console.log(category);

if (category) {
  // Fetch data from your JSON source (similar to your previous code)
  fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad?select=categories/0/name/", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ", // Replace with your actual API key
    },
  })
    .then((response) => response.json())
    .then(showProducts);
}

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#stiTemplate").content;
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
}
