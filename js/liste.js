// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("kategori");
const url =
  "https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad?kategori=eq.";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ";

console.log(category);

const options = {
  method: "GET",
  headers: {
    apikey: key,
  },
};

if (category) {
  fetch(url + category, options)
    .then((res) => res.json())
    .then(visMad);
}

function visMad(mad) {
  console.log(mad);
  // mad.forEach((elm) => {
  //   console.log(elm);
  // });
  // Assuming mad is an array of objects
  mad.forEach((item) => {
    const template = document.querySelector("#stiTemplate").content;
    const copy = template.cloneNode(true);

    // Replace these with actual property names from your data
    copy.querySelector("img").src = item.illustrations;
    copy.querySelector("h3").textContent = item.title;
    copy
      .querySelector("img")
      .setAttribute("href", `info-side.html?id=${item.illustrations}`);
    document.querySelector("main").appendChild(copy);
  });
}

// function showProduct(product) {
//   const template = document.querySelector("#stiTemplate").content;
//   const copy = template.cloneNode(true);
//   //ændre indhold
//   copy.querySelector("h3").textContent = product.productdisplayname
// }

//categories/0/name=" + category
