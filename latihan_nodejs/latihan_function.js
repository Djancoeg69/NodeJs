var http = require('http');

function hitung(angka1,angka2) {
    var hasil = angka1 * angka2
    var result = `${angka1} * ${angka2} = ${hasil}`
    return result;
}

var server = http.createServer(function (req, res) {
    var nama = "gutomos"
    res.end(hitung(100000,200))
})

server.listen(8000)

console.log("server berjalan pada url http://localhost:8000/")