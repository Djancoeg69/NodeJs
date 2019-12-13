const hitung = (angka1,angka2) => {
    let hasil = angka1 * angka2
    let result = `${angka1} * ${angka2} = ${hasil}`
    return result
}

const cb = () => {
    return "ini callback"
}

console.log(hitung (10,20,cb))