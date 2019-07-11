'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(num => collectionB.indexOf(num)!=-1)
}
