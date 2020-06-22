// num = 5
// num > 1 && num / num  only => primeNumber

export const PrimeSifting = (num, array=[]) => {
  let sortArray = []
  for (let i = 2; i < num + 1; i++){
    sortArray.push(i);
  }
  array = sortArray.map(i > 1 && i / i ) 
  return array;
  
}
PrimeSifting(8);


//2,3,5,7,(8)

// var eratosthenes = function(n) {
//     // Eratosthenes algorithm to find all primes under n
//     var array = [], upperLimit = Math.sqrt(n), output = [];

//     // Make an array from 2 to (n - 1)
//     for (var i = 0; i < n; i++) {
//         array.push(true); 
//     }

//     // Remove multiples of primes starting from 2, 3, 5,...
//     for (var i = 2; i <= upperLimit; i++) { 
//         if (array[i]) {
//             for (var j = i * i; j < n; j += i) {
//                 array[j] = false;
//             }
//         }
//     }

//     // All array[i] set to true are primes
//     for (var i = 2; i < n; i++) {
//         if(array[i]) {
//             output.push(i);
//         }
//     }

//     return output;
// };
