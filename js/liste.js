// her opretter vi en URLParams
const urlParams = new URLSearchParams(window.location.search);
// vi henter værdien kategori
const category = urlParams.get("kategori");
// vi filtrer daten for at hente en bestemt kategori
const url = "https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad?kategori=eq.";
// vi bruger key variablen til vores API
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ";

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
  mad.forEach((item) => {
    const template = document.querySelector("#stiTemplate").content;
    const copy = template.cloneNode(true);
    //ændre indhold / opdatere indholdet at html'en for indholdet baseret på dataten
    copy.querySelector("img").src = item.illustrations;
    copy.querySelector("h3").textContent = item.title;
    //Vi opdatere senere linkets attribut med et a-tag for at pege på en bestemt side -baseret på dataens id
    copy.querySelector("a").setAttribute("href", `info-side.html?id=${item.id}`);
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
