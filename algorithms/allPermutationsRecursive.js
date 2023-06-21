
function swap(word, x, y){
  const temp = word[x]
  word[x] = word[y];
  word[y] = temp;
}

function getPermutations(n, chars){

  if(n === 1){
    console.log(chars)
    return 'ok'
  } else {
    getPermutations(n-1, chars)
    for(let i = 0; i < n -1 ; i++){
      //const newChar = swap(chars, i, n-1)
      if(n % 2 === 0){
        swap(chars, i, n-1);
      } else {
        swap(chars, 0, n-1);
      }
      getPermutations(n-1, chars)
    }
  }
}

function permAlone(str) {
  const chars = str.split('');
  const permutations = getPermutations(chars.length, chars)
  return permutations;
}

console.info(permAlone('abc'));