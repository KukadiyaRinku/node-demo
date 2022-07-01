
let a = 10;
let b = 30;

var waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(40);
    }, 2000);
});

waitingData.then((data) => {
    console.log(a + data);
});

console.log(a + b);