/// https://szmeszolzqvldfshrvhu.supabase.co

fetch("https://szmeszolzqvldfshrvhu.supabase.co")
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
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `index.html?category=${cat.category}`;
  //appender
  document.querySelector(".letterGroup ol").appendChild(clone);
}
