const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad?id=eq." + id;
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ";

const options = {
  method: "GET",
  headers: {
    apikey: key,
  },
};

fetch(url + id, options)
  .then((respnse) => respnse.json())
  .then((data) => visMad(data));

function visMad(item) {
  console.log(item);
  document.querySelector("h3").textContent = item.title;
  document.querySelector("img").src = item.illustrations;
}
