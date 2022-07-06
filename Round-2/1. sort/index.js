// --- Directions
// Implement selectionSort

const selectionSort = (arr) => {
  // [ 2 , 1 , 5 , 4 , 9, 3]

  for (let x = 0; x < arr.length; x++) {
    for (let j = x + 1; j < arr.length; j++) {
      if (arr[x] > arr[j]) {
        [arr[x], arr[j]] = [arr[j], arr[x]];
      }
    }
  }

  return arr;
};

module.exports = { selectionSort };
