

export const potteryList = (potteryInventory) => {
    let potteryListHTML = ''
    for (const pottery of potteryInventory){
        potteryListHTML+=
       `<section class="pottery" id="${pottery.id}">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery__price">Price is ${pottery.price}</div>
        </section>`;
    }

    return potteryListHTML
}


//  domReference.innerHTML = `${string1}${string2}${string3}`