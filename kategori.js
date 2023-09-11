/// https://szmeszolzqvldfshrvhu.supabase.co

fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //fanger
  const template = document.querySelector("template").content;
  //cloner
  const clone = template.cloneNode(true);
  //ændre indhold
  clone.querySelector("img").illustrations = cat.category;
  clone.querySelector("img").href = `index.html?category=${cat.category}`;
  //appender
  document.querySelector(".letterGroup ol").appendChild(clone);
}
