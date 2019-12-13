let nilai = 5;
function kuadrat(nilai, ceknilai) {
    let hasil = nilai * nilai
    let error = null

    if (hasil === 0)
        error = 'Error'

    ceknilai(error, hasil);
}

let ceknilai = function(error, hasil) {
    if (error)
        console.error(error);
    else 
        console.log(hasil);
}

kuadrat(nilai, ceknilai);