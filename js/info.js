const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad?kategori=eq.";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ";

console.log(mad);

const options = {
  method: "GET",
  headers: {
    apikey: key,
  },
};

if (category) {
  fetch(url + mad, options)
    .then((respnse) => respnse.json())
    .then((data) => visMad(data));
}

function visMad(mad) {
  console.log(mad);
  document.querySelector("h3").textContent = item.title;
  document.querySelector("img").src = item.illustrations;
  document.querySelector(".description .").textContent = product.brandname;
  document.querySelector("p").textContent = product.sankelandskaber / 0 / title;
  document.querySelector(".description").textContent = product.description;
}
copy.querySelector("img").src = item.illustrations;
copy.querySelector("h3").textContent = item.title;
