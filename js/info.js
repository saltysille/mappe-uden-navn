const urlParams = new URLSearchParams(window.location.search);
//ud-variabel bruger get til at hente værdien af "id"
const id = urlParams.get("id");
//filtrer data for at få på det specifikke id
const url = "https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad?id=eq." + id;
//vores api-nøgle
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVzem9senF2bGRmc2hydmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNjkwODYsImV4cCI6MjAwOTY0NTA4Nn0.vdZbIwkvBjROsOeXxYGz-XwqyTfAlc40OxFSu8OAjaQ";

//henter data og api nøgle
const options = {
  method: "GET",
  headers: {
    apikey: key,
  },
};

//fetcher data fra api'en
fetch(url, options)
  .then((response) => response.json())
  .then((data) => visMad(data));

//visMad funktionen modtager dataen, og logger dataen i konsollen
function visMad(item) {
  console.log(item);
  //ændre indhold
  document.querySelector(".background-info h3").textContent = item.title;
  document.querySelector(".img-info").src = item.illustrations;
}
