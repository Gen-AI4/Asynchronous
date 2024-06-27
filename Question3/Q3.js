//Question # 3 Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.
let fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("After delay 1 second");
        }, 1000);
        resolve("Data fetched successfully");
    });
};
fetchData().then((result) => {
    console.log(result);
});
export {};
