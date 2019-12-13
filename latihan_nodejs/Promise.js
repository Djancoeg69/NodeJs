let hasil = 0
let error = null;
const promiseA = new Promise((resolve, reject) => {
    hasil = 1 + 1;
    if (hasil == 0) reject("error")
    resolve(hasil)
});

const promiseB = new Promise((resolve, reject) => {
    hasil = 2 + 2;
    if (hasil == 0) reject("error")
    resolve(hasil)
});
const promiseFail = new Promise((resolve, reject) => {
    hasil = 3 * 3;
    if (hasil == 0) reject("error")
    resolve(hasil)
});

promiseA
    .then(resA => {
        console.log('hasil A : ', resA);
        return promiseB;
    })


    .then(resB => {
        console.log('hasil B : ', resB);
        return promiseFail;
    })

    .then(resFail => {
        console.log('hasil fail: ', resFail);
    })
    .catch(err => console.log('error:', err));