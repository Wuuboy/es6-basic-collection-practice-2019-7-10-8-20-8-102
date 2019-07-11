'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(num => objectB["value"].indexOf(num)!=-1)
}
