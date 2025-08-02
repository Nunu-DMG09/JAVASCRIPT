// CALLBACK 

/*function addToArray(data, array, callback) {
    if(!array){
        callback(new Error("No existe el array"), null);
    } else {
        setTimeout(function (){
            array.push(data);
            callback(null, array);
        }, 1000)   
    }        
} 

let array = [1, 2, 3];
addToArray(4, array, function(err) {
    console.log(array); // [1, 2, 3, 4]
})*/

function addToArray(data, array){
    const promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            array.push(data);
            resolve(array);
        }, 1000);
    })

    if(!array){
        reject(new Error("No existe el array"), null);
    }
    return promise;
}

let array = [1, 2, 3];  
addToArray(4, array).then(function(array) {
    console.log(array); // [1, 2, 3, 4]
})   