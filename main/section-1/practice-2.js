'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(num => collectionB[0].indexOf(num)!=-1)
}
