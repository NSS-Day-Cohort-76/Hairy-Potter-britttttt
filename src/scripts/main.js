// Imports go first
import { makePottery } from './potteryWheel.js';
import { firePottery } from './kiln.js';
import { toSellOrNotToSell, usePottery } from './potteryCatalogue.js';
import { potteryList } from './potteryList.js';

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 6.9, 5)
let uglyButStylishVase = makePottery("vase", 7, 9)
let bowl = makePottery("bowl", 4.20, 24)
let frogStatue = makePottery("frog statue", 1, 2)
let plate = makePottery("plate", 1, 1)

console.log(mug)
console.log(uglyButStylishVase)
console.log(bowl)
console.log(frogStatue)
console.log(plate)
// Fire each piece of pottery in the kiln

firePottery(mug, 2500)
firePottery(uglyButStylishVase, 1000)
firePottery(bowl, 700)
firePottery(frogStatue, 2199)
firePottery(plate, 6000)

console.log(mug)
console.log(uglyButStylishVase)
console.log(bowl)
console.log(frogStatue)
console.log(plate)

// // Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(uglyButStylishVase)
toSellOrNotToSell(bowl)
toSellOrNotToSell(frogStatue)
toSellOrNotToSell(plate)


console.log(mug)
console.log(uglyButStylishVase)
console.log(bowl)
console.log(frogStatue)
console.log(plate)
// Invoke the component function that renders the HTML list

const article = document.querySelector("article");
const potteryHTML = potteryList(usePottery());
article.innerHTML = potteryHTML;