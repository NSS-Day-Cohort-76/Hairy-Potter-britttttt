// Imports go first
import { makePottery } from './potteryWheel.js';
import { firePottery } from './kiln.js';


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

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

