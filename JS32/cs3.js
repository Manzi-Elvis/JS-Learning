function findPairs(arr, sum){
      let pairs = []
      for(let i = 0; i< arr.length; i++){
            let num = arr[i]
            let x = sum-num;
            pairs.push([x, num]);
      }
      return pairs;
}
console.log(findPairs([1,2,3,4,5],5))