function divide(array){
  const middle = Math.round(array.length/2)
  const subsets = [array.slice(0,middle), array.slice(middle)]
  return subsets
}

function merge(array1, array2) {
  const merged = [];
  while(array1.length > 0 && array2.length > 0){
    if(array1[0] < array2[0]){
      merged.push(array1.shift())
    } else {
      merged.push(array2.shift())
    }
  }
  while(array1.length > 0){
    merged.push(array1.shift())
  }
  while(array2.length > 0){
    merged.push(array2.shift())
  }
  return merged;
}

function mergeSort(array) {
  if(array.length === 1){
    return array
  }

  const sections = divide(array);
  return merge(mergeSort(sections[0]), mergeSort(sections[1]));
}

console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))