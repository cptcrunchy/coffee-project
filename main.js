"use strict"

var blendsContainer = document.querySelector("#blends-container");
var roastSelection = document.querySelector("#roast-selection");
var blendSearch = document.querySelector("#blendSearch");

var coffees = [
    {id: 1, name: 'Light City', roast: 'light', price: 4.99 , image: '0002.jpg'},
    {id: 2, name: 'Half City', roast: 'light', price: 4.99 , image: '0003.jpg'},
    {id: 3, name: 'Cinnamon', roast: 'light', price: 4.99 , image: '0004.jpg'},
    {id: 4, name: 'City', roast: 'medium', price: 5.99 , image: '0005.jpg'},
    {id: 5, name: 'American', roast: 'medium', price: 5.99, image: '0006.jpg'},
    {id: 6, name: 'Breakfast', roast: 'medium', price: 5.99, image: '0007.jpg'},
    {id: 7, name: 'High', roast: 'dark', price: 6.99, image: '0008.jpg'},
    {id: 8, name: 'Continental', roast: 'dark', price: 6.99, image: '0009.jpg'},
    {id: 9, name: 'New Orleans', roast: 'dark', price: 6.99, image: '0010.jpg'},
    {id: 10, name: 'European', roast: 'dark', price: 6.99, image: '0011.jpg'},
    {id: 11, name: 'Espresso', roast: 'dark', price: 6.99, image: '0012.jpg'},
    {id: 12, name: 'Viennese', roast: 'dark', price: 6.99, image: '0013.jpg'},
    {id: 13, name: 'Italian', roast: 'dark', price: 6.99, image: '0014.jpg'},
    {id: 14, name: 'French', roast: 'dark', price: 6.99, image: '0015.jpg'},
];

function renderCoffees(coffees) {
    var stringBuilder = '';
    for(var coffee of coffees) {
        stringBuilder += '<article>';
        stringBuilder += '<a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">';
        stringBuilder += '<div class="dtc w3">';
        stringBuilder += `<img src="http://mrmrs.github.io/images/${coffee.image}" class="db w-100" />`;
        stringBuilder += '</div>';
        stringBuilder += '<div class="dtc v-top pl2">';
        stringBuilder += `<h1 class="f6 f5-ns fw6 lh-title black mv0">${coffee.name}</h1>`;
        stringBuilder += '<h2 class="f6 fw4 mt2 mb0 black-60">' + coffee.roast + '</h2>';
        stringBuilder += '<dl class="mt2 f6">';
        stringBuilder += '<dt class="clip">Price</dt>';
        stringBuilder += '<dd class="ml0">$' + coffee.price + '</dd>';
        stringBuilder += '</dl>';
        stringBuilder += '</div>';
        stringBuilder += '</a>';
        stringBuilder += '</article>';
    }
    return stringBuilder;
}

function filterByRoast(value){
    return coffees.filter( coffee => coffee.roast === value)
}

function filterByName(value){
    return coffees.filter( coffee => coffee.name.toLocaleLowerCase().search(value) > -1)
}

function displayBlendsByRoast(e){
    var selectRoastType = e.target.value;
    var selectedRoasts = (selectRoastType === "all") ? coffees : filterByRoast(selectRoastType);
    blendsContainer.innerHTML = renderCoffees(selectedRoasts);
}

function searchBlendsByName(e){
    var searchString = e.target.value
    blendsContainer.innerHTML = renderCoffees(filterByName(searchString))
}


document.addEventListener("DOMContentLoaded", function() {
    blendSearch.value = "";
    blendsContainer.insertAdjacentHTML("afterbegin", renderCoffees(coffees))
})

roastSelection.addEventListener("change", displayBlendsByRoast)
blendSearch.addEventListener("keyup", searchBlendsByName)