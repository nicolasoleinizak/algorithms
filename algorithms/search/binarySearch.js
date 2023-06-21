function binarySearch(searchList, value, path = []) {
  const middleIndex = Math.floor((searchList.length-1)/2)

  path.push(searchList[middleIndex])

  if(searchList[middleIndex] === value){
    return path;
  } else if(searchList.length < 2){
    return "Value Not Found"
  } else if(searchList[middleIndex] < value){
    return binarySearch(searchList.slice(middleIndex+1), value, path)
  } else {
    return binarySearch(searchList.slice(0, middleIndex), value, path);
  }
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

console.log(binarySearch(testArray, 0))