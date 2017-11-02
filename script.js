
var listOfProducts;

//hämtar info från min json-fil
fetch("products.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        productData = data;
        createListFromProductData();
        console.log(productData);
    });

// skapar min funktion, lista och loop
function createListFromProductData() {

    // gör en variabeln av #main 
    var main = document.getElementById("main");

    // Loopar igeom listan
    for (var index = 0; index < productData.length; index++) {
        
        // anropar vår nya funktion
        var productCard = createProductCard(productData[index]);

        // lägger in min productCard i "main"
        main.appendChild(productCard);
    }
    document.body.appendChild(main);
}

//Ny funtkion utanför förra
function createProductCard(productData) {
    var productCard = document.createElement("div")
    productCard.className = "productCardClass";
//Title
    var getProductTitle = document.createElement("h2");
    getProductTitle.innerText = productData.title;
    productCard.appendChild(getProductTitle);
//Description
    var getProductsDescription = document.createElement("p");
    getProductsDescription.innerText = productData.description;
    productCard.appendChild(getProductsDescription);
//Image
    var getProductImage = document.createElement("img");
    getProductImage.src = "assets/" + productData.image;
    productCard.appendChild(getProductImage);
//Price
    var getProductPrice = document.createElement("h3");
    getProductPrice.innerText = productData.price + " kr";
    productCard.appendChild(getProductPrice);
//Button
    var buttonElement = document.createElement("button");
    buttonElement.onclick = function() {positive()};
    buttonElement.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i>' + "Lägg till i kundvagnen";
    productCard.appendChild(buttonElement);


    return productCard;
}
var count = 0;
var step = 1;

//räknaren
var span = document.querySelector("span");
var positive;

function positive (){

count = count + step
span.innerText = count;
// alert("1 produkt har lagts till");
 }
 
 console.log(listOfProducts);

