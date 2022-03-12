/*
A func that returns count of boomerangs in an Array

ex:  [1, 0, 1, 5, 5, 5]
output: [1, 0, 1] --> 2

*/

const sampleArr = [1 ,0, 1, 5 ,8, 7, 6 ,8, 6, 9, 9, 9]

function countOfBoomerangs(arr){
  
  let count = 0
  for (let index = 0; index < arr.length; index++) {
    
    //if [same el, diffrent el, same el] --> [0, 1, 0] --> true
    if (
      arr[index]!=arr[index+1]&&
      arr[index]==arr[index+2]
    ){
      count++
      console.log(arr[index], arr[index+1], arr[index+2])
      index = index+2
    }
  }
  
  return count
}


// driver code
console.log("count of boomerang -->", countOfBoomerangs(sampleArr))
