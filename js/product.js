fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".produkt_info h2").textContent =
    product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".gender").textContent = product.gender;
  document.querySelector(".season").textContent = product.season;

  document.querySelector("img").src =
    "https://kea-alt-del.dk/t7/images/webp/640/1533.webp";
}
