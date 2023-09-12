const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
  fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad?select=categories/0/name" + category)
    .then((response) => response.json())
    .then(showProducts);
} else {
  fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad")
    .then((response) => response.json())
    .then(showProducts);
}

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#stiTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("img").src = `https://marieelfrida.com/kea/assets/${product.id}.svg`;

  copy.querySelector(".read-more").setAttribute("href", `info.html?id=${product.id}`);
  document.querySelector("main").appendChild(copy);
}
