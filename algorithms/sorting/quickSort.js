const moveToEnd = (array, x) => {
  const valueToMove = array.splice(x, 1);
  array.push(...valueToMove)
}

const quickSort = (array, result = []) => {
  if(array.length <= 1){
    return array;
  }

  let p = array.length-1;

  for(let i = 0; i < p; i++){
    if(array[i] > array[p]){
      moveToEnd(array, i)
      p--;
      i--;
    }
  }
  
  return result
  .concat(quickSort(array.slice(0, p)))
  .concat(array[p])
  .concat(quickSort(array.slice(p+1)));
}

console.log(quickSort([666,15,97,23,756,132,567,1,9,23, 10000]));
