'use strict';

module.exports = function countSameElements(collection) {
  //decode the input to {word:count}
  let inputObject = {}
  collection.filter(word =>{
    if(word.length==1){
      inputObject[word]=inputObject[word]+1||1
    }else {
      const count = parseInt(word.replace(/[^0-9]/ig,""));
      const decodedWord = word.substring(0,1)
      inputObject[decodedWord] = inputObject[decodedWord]?inputObject[decodedWord]+count:count
    }
  })
  // store result [{word:count}]
  let result = []
  Object.keys(inputObject).filter(word =>{
    const keyToCount = {
      name:word,
      summary:inputObject[word]
    }
    result.push(keyToCount)
  })
  return result;
}
