// Mix Array 
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Function to filter the non-strings and lowercase words (includes '')
// return promise that will resolve if the array is not empty, and reject if the array is empty
// if do not want to include '' in the result array, can add word.length > 0 condition in the filter()
function lowerCaseWords(mixedArray){
    // filter to get only the string type
    const lowerCaseStringsArray = mixedArray.filter(word => typeof(word) === "string")
    // map string to a lowercase
    .map(word => word.toLowerCase());
    var promise = new Promise((resolve, reject) => {
        if(lowerCaseStringsArray.length > 0){
            resolve(lowerCaseStringsArray);
        }else{
            reject('There is no string in an array.')
        }
    });
    return promise;
}

// Call lowerCaseWords() and handle resolve and reject result
lowerCaseWords(mixedArray).then((response) => {
    console.log(response);
})
.catch((err) => {
    console.error(err);
});