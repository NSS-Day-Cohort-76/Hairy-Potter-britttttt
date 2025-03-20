let potteryInventory = []

export const toSellOrNotToSell = (potteryItem) => {

    if (potteryItem.weight >= 6 && potteryItem.cracked == false){
    potteryItem.price = 40
    potteryInventory.push(potteryItem)
 
} else if (potteryItem.weight < 6 && potteryItem.cracked == false) {
    potteryItem.price = 20
    potteryInventory.push(potteryItem)
 }
 
    return potteryItem

}

export const usePottery = () => {
    return structuredClone(potteryInventory)
}