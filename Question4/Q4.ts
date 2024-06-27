//Question # 4 Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch

let fetchWithError = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res("Data fetched successfully!");
        }, 1000)
        rej("Data fetched failed!");
    })
}
fetchWithError().then((result) => console.log(result)).catch((error) => console.log(error));
