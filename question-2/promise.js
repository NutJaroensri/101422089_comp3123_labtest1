// Method that return a resolved promise with {'message': 'delayed success!'}
// delay 500 ms 
function resolvedPromise(){
    var promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            let success = {'message': 'delayed success!'};
            resolve(success);
            
        }, 500);
    });
    return promise;
}

// Method that return a rejected promise with {'error': 'delayed exception!'}
// delay 500 ms
function rejectedPromise(){
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let failure = {'error': 'delayed exception!'};
            reject(failure);
        }, 500);   
    });
    return promise;
}

// Call resolvedPromise and handle resolve and reject result
// and output the result to the console
resolvedPromise().then((response) => {
    console.log(response)    
})
.catch((err) => {
    console.log(err)
})

// Call rejectedPromise and handle resolve and reject result
// and output the result to the console
rejectedPromise().then((response) => {
    console.log(response)
})
.catch((exception) => {
    console.log(exception);
})