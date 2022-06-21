function sumMixArr(arr) {
    let sum = 0;
    arr.map(function(element) {
        sum += element;
    })
    return sum;
}

console.log(sumMixArr([1, '2', 3]));
// //array of numbers list

// Or

// function sumMixArr(arr) {
//     let sum = 0;
//     arr.map(function(element) {
//         sum += parseInt(element);
//     })
//     return sum;
// }

// console.log(sumMixArr([1, '2', 3]));

