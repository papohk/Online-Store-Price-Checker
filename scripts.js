let item = prompt("Enter the name of the item:");
let price = Number(prompt("What is the base price of the item?"))
let blackFri = prompt('Is today "Black Friday"? Answer yes or no.')
let searchEngine = prompt("Did the purchaser find the product through a search engine? Answer yes or no.")
let compShopSite = prompt("Did the purchaser visit a comparison-shopping site? Answer yes or no.")

let message = ""
let basePrice = price

if(blackFri == "yes") {
    price *= .75
    message += "\nSince it's Black Friday, we will reduce the price by 25%. "
} else {
    message += "\nIt's not Black Friday, so the price didn't change for that. "
}

if(searchEngine == "yes") {
    price = (price * 1.01)
    message += "\nWe will increase the price by 1% to pay the search engine. "
} else {
    message += "\nThe customer didn't use a search engine, so the price didn't change for that. "
}

if(compShopSite == "yes") {
    price = (price * .90)
    message += "\nSince the customer visited a comparison-shopping site, we will reduce the price by 10%. "
} else {
    message += "\nThe customer didn't visit a comparison-shopping site, so the price didn't change for that. "
}


message = `The base price for the ${item} is $${basePrice.toFixed(2)}. ${message}\nThe final price is $${price.toFixed(2)}.`;
console.log(message)
alert(message)
