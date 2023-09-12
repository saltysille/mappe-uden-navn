const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad" + id)
  .then((respnse) => respnse.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".description h3").textContent = product.title;
  document.querySelector(".description .").textContent = product.brandname;
  document.querySelector("img").src = ` https://marieelfrida.com/kea/assets/${product.id}.svg`;
  document.querySelector("").textContent = product.sankelandskaber / 0 / title;
  document.querySelector(".description").textContent = product.description;
}
