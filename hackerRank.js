
function gemStones(arr){

let D = {};

  for (let i = 0, j = arr.length; i < arr[j].length; i++, j--){

    if(!D[arr[0][i]]){
      D[arr[0][i]] = 1;
    } else {
      D[arr[0][i]]++
    }



  }
  // D:  { a: 1, b: 1, c: 1, d: 2, e: 1 }

  for (let x of rocks){

  }
};


gemStones([ 'abcdde', 'baccd', 'eeabg' ]);
