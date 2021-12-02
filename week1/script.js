const question1 = function (arr) {
  let count = 0; 
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      count ++
      }
    }
  return count
  }

const question2 = function (arr) {
  let staggeredCount = 0;
  let initial = arr[0] + arr[1] + arr[2];
  for (i = 1; i < arr.length - 2; i++) {
    let staggered = arr[i] + arr[i + 1] + arr[i + 2]
    if (staggered > initial) {
      staggeredCount++
    }
    initial = staggered;
  }
  return staggeredCount
}

const answer1 = question1(testArr);
console.log(`Question 1 answer is ${answer1}`);
const answer2 = question2(testArr);
console.log(`Question 2 answer is ${answer2}`);
