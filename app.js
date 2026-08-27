console.log("javascript is connected");

const cards = [
    {
        name: "Charizard",
        rarity: "SIR",
        set: "Phantasmal Flames",
        purchasePrice: 0,
        price: 550
    },

    {
        name: "Gengar",
        rarity: "VMax",
        set: "Evolving Skies",
        purchasePrice: 0,
        price: 30
    },

    {
        name: "Rayquaza",
        rarity: "Amazing Rare",
        set: "Vivid Voltage",
        purchasePrice: 0,
        price: 15
    }
];

cards.forEach((card) => {
    console.log(card.name);
});

cards.forEach((card) => {
    const profit = calculateProfit(
        card.purchasePrice, 
        card.salePrice
    );
    console.log(card.name);
    console.log(profit);

});

const totalProfit = cards.reduce((total, card) => {

    const profit = calculateProfit(
        card.purchasePrice,
        card.salePrice
    );

    return total + profit;

}, 0);

console.log(totalProfit);

const totalValue = cards.reduce((total, card) => {
    return total + card.salePrice;
}, 0);
console.log(totalValue);

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", () => {
    console.log(searchInput.value);
});

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", () => {
    console.log("add Card clicked");
});

const editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", () => {
    console.log("edit Card clicked");
});

const deleteButton = document.querySelector(".delete-button");
deleteButton.addEventListener("click", () => {
    console.log("delete Card clicked");
});