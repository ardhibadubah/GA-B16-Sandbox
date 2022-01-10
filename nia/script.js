// ASSIGMENT OPERATOR
// let var1 = 7
// var1 -= 4
// console.log(var1);

// FUNCTION DECLARATION
// function ageChecker() {
//     const age = 19
//     if(age <= 20) {
//         console.log('Umur dibawah 20 tahun termasuk dibawah umur');
//     } else {
//         console.log('Umur diatas 20 tahun sudah cukup umur');
//     }
// }

// INVOKING THE FUNCTION
// ageChecker()

/*
0 - 50 = E
51 - 70 = D
71 - 80 = C
81 - 90 = B
91 - 100 = A
*/

// function scoreConverter() {
//     const score = 80;

//     if (score >= 91 && score <= 100) {
//         console.log('A');
//     } else if (score >= 81 && score <= 90) {
//         console.log('B');
//     } else if (score >= 71 && score <= 80) {
//         console.log('C');
//     } else if (score >= 51 && score <= 70) {
//         console.log('D');
//     } else  if (score >= 0 && score <= 50) {  
//         console.log('E'); 
//     } else {
//         console.log('ERROR');
//     }
// }

// scoreConverter()

// ARRAY
// const namaMurid = ["Ardhi", "Nia", "Edo"]

// const length = namaMurid.length
// const indexTerakhir = length - 1
// const indexKe2Terakhir = length - 2

// 3 itu adalah?
// 3 itu bukan array dong
// yok kita bahas
// udah di unmute belum aing?
// array
// for ( let i = 3; i <= namaMurid.length; i++) {
//     console.log( namaMurid[i-1] )
//     console.log( namaMurid[i-2] )
//     console.log( namaMurid[i-3] )
// }

// Udah mulai belum nih?
// ga bisa akses terminal mas karna infinity loop tdi
// itu udah bisa kan? udah aku stop infinite loop nya
// gabisa 
// Coba lagi

// OBJECT
const kotak = {
    // properties / kata sifat / kata benda
    panjang: 10,
    lebar: 20,
    tinggi: 5
}

const volume = (param1, param2, param3) => {
    console.log("volume: " + param1 * param2 * param3);
}
volume(kotak["panjang"], kotak["lebar"], kotak["tinggi"]);

// kotak["panjang"] beda dengan ["lebar"]
// kotak["panjang"] -> hasilnya 10 -> kita akses data di dalam object
// ["lebar"] -> hasilnya ["lebar"] -> kamu bikin array yg isinya "lebar"

const Resep = {
    judul: "Mie Instan",
    porsi: 7,
    bahan: [
        "mie",
        "telor",
        "sayur",
        "permicinan",
        "sosis"
    ]
}

function makanan(mkn) {
    console.log("judul: " + mkn.judul);
    console.log("porsi: " + mkn.porsi + " porsi");
    console.log("bahan:");
    for ( let i = 0; i < mkn.bahan.length; i++) {
        console.log(mkn.bahan[i]);
      }
}
makanan(Resep);