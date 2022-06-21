const array = [32, 523, 5632, 920, 6000];

let largestNum = array[0];
let secondLargestNum = 0;

for(let okey = 1; okey < array.length; okey++) {
    if (array[okey] > largestNum) {
        secondLargestNum = largestNum;
        largestNum = array[okey];
    }
    if (array[okey] !== largestNum && array[okey] > secondLargestNum){
        secondLargestNum = array[okey];
    }
};

console.log("Largest Number in the array is " + largestNum);
console.log("Second Largest Number in the array is " + secondLargestNum);