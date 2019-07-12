'use strict';

module.exports = function countSameElements(collection) {
    let resultArray =[]
    let inputObject = {}
    collection.filter(x => (inputObject[x]=(inputObject[x]+1)||1))
    let keys = Object.keys(inputObject)
    keys.filter(x =>{
        let resultObject = {
            key:x,
            count:inputObject[x]
        }
        resultArray.push(resultObject)
    }
   )
    return resultArray
}
