// /// https://szmeszolzqvldfshrvhu.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ

// fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad", {
//   method: "GET",
//   headers: {
//     apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ",
//   },
// })
//   .then((res) => res.json())
//   .then(showCategories);

// function showCategories(cats) {
//   console.log(cats);
//   cats.forEach(showCategory);
// }

// function showCategory(cat) {
//   console.log(cat);
//   //fanger
//   const template = document.querySelector("template").content;
//   //cloner
//   const clone = template.cloneNode(true);
//   //ændre indhold
//   clone.querySelector("img").src = cat.illustrations;
//   clone.querySelector("img").href = `index.html?category=${cat.category}`;
//   //appender
//   document.querySelector(".letterGroup ol").appendChild(clone);
// }

// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get("category");

// if (category) {
//   fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad?select=categories/0/name" + category)
//     .then((response) => response.json())
//     .then(showProducts);
// } else {
//   fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad")
//     .then((response) => response.json())
//     .then(showProducts);
// }

function showProduct(product) {
  const template = document.querySelector("#stiTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("img").src = `https://marieelfrida.com/kea/assets/${product.id}.svg`;

  copy.querySelector(".read-more").setAttribute("href", `info.html?id=${product.id}`);
  document.querySelector("main").appendChild(copy);
}
