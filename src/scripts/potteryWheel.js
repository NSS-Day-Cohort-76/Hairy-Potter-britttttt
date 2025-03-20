let potteryId = 1; 

//function must allow input of shape, weight. height parameters
//then function must return an object with properties: shape, weight, height, id
    //id must increment in value each time the function is invoked

export const makePottery = (itemShape, itemWeight, itemHeight) => {
    const potteryItem = {   
        shape: itemShape,
        weight: itemWeight,
        height:  itemHeight,
        id: potteryId
    }

    potteryId++

    return potteryItem
 
}


        
