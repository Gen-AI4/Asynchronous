//Question # 5 Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.

let fetchData = () => {
    return new Promise ((res, rej) => {
        res("Data fetch successfully!");
    })
}
let processData = () => {
    return new Promise ((res, rej) => {
        rej("Data processing failed!");
    })
}
function executeSequentially(){
    fetchData().then((result) => {
        console.log(result);
        return fetchData()
    }).catch((error) => {
        console.log(error);
        return (processData);
    })
}
executeSequentially()