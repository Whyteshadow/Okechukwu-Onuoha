const filterArray = (arr) => {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if ( typeof arr[i] !== "string") {
        filteredArr.push(arr[i])
      } 
    } return filteredArr
  };
  console.log(filterArray([1, 2, "a", "b"]));
  console.log(filterArray([1, "a", "b", 0, 15]));
  console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

module.exports = filterArray