// == Programming
/*
 * Variabel
 * Tipe Data
 * Operator
 * Kondisional
 * Perulangan / Loop
 * Function
 * 
 * Algorithm
 * Data Structure
 */

/* OPERATOR
- LOGICAL OPERATOR
  ~ && (AND)
  ~ || (OR)
  ~ ! (NOT)
- ARITMATIC OPERATOR
  ~ + (tambah)
  ~ - (kurang)
  ~ / (bagi)
  ~ * (kali)
  ~ % (sisa bagi)
- .... OPERATOR
  ~ ++
  ~ --
*/

/*
- ASSIGNMENT OPERATOR
  ~ =
  ~ +=
  ~ -=
  ~ /=
  ~ *=
*/

// let var1 = 10
// console.log(var1)
// var1 += 3
// console.log(var1)

/**
 * - COMPARISON OPERATOR
  ~ >
  ~ >=
  ~ <
  ~ <=
  ~ ==
  ~ !=
  ~ ===
  ~ !==
 * 
 */

// TRUE
// FALSE

// 6
// 1, 2, 3, 4 < 5 TRUE
// 1, 2, 3, 4, 5 <= 5 TRUE

// Jenis kelamin Nia == Jenis kelamin Edo
// Jenis kelamin Nia != Jenis kelamin Edo

// let hasil = 10 <= 10
// console.log( hasil )

/**
 * - LOGICAL OPERATOR
  ~ && (AND)
  ~ || (OR)
  ~ ! (NOT) 
 */

// console.log("== AND ==")
// console.log("true && true: ", true && true )
// console.log("true && false: ", true && false )
// console.log("false && true: ", false && true )
// console.log("false && false: ", false && false )

// console.log("== OR ==")
// console.log("true || true: ", true || true )
// console.log("true || false: ", true || false )
// console.log("false || true: ", false || true )
// console.log("false || false: ", false || false )

// console.log("== NOT ==")
// console.log("!true: ", !true)
// console.log("!false: ", !false)


// !Jenis Kelamin Nia != Jenis kelamin Edo // FALSE
// &&
// Umur Nia <= Umur Edo // TRUE
// HASIL: FALSE


/*
  ===== AGE CHECKER =====
  Buat function untuk mengecek apakah nilai umur
  termasuk dibawah umur atau sudah cukup umur:
  - Umur dibawah 18 tahun termasuk dibawah umur
  - Umur diatas 18 tahun sudah cukup umur
  Cetak hasil di dalam console.
*/


/*
  ===== SCORE CONVERTER =====
  Buat function yang menerima nilai ujian dan merubahnya ke bentuk alphabet

  Score    | Hasil Console Log
  ===========================
  0 - 50   |   E
  51 - 70	 |   D
  71 - 80	 |   C
  81 - 90	 |   B
  91 - 100 |   A

  CONTOH:
  scoreConverter(95) -> console log "A"
  scoreConverter(73) -> console log "C"
*/


// function ageChecker(){
//   const age = 18 // ganti-ganti untuk ngetes
//   // Write your code here

// }

// ageChecker()

// function scoreConverter(){
//   const score = 18 // ganti-ganti untuk ngetes
//   // Write your code here

// }

// scoreConverter()

// Make a function that

// FUNCTION DECLARATION
// function masakIndomie(rasa, isMedok){
//   if( isMedok ) {
//     return "Masak indomie medok rasa " + rasa
//   }
//   return "Masak indomie rasa " + rasa
// }

// INVOKING THE FUNCTION
// masakIndomie("original")
// masakIndomie("rendang")
// masakIndomie("soto")
// masakIndomie()

// const masakApa = masakIndomie("rendang", false)
// console.log(masakApa)

// === ARRAY === 
// const namaMurid = ["Andi", "Budi", "Charlie", "David", "Deo", "Dory", "Eka", "Farhan", "Gargan", "Heru", "Jatmiko", "Toto", "Sakti", "Yahya", "Waluyo"]
//  Array.length
// Untuk mengetahui jumlah data di dalam array.
// console.log(namaMurid.length)
// console.log data terakhir dari sebuah array
// const length = namaMurid.length  // 3
// const indexTerakhir = length - 1 // 2
// const indexKe2Terakhir = length - 2 // 1
// console.log( namaMurid[indexTerakhir] )
// Console.log data kedua dari terakhir dari sebuah array
// console.log( namaMurid[indexKe2Terakhir] )
// console.log( namaMurid[0] )
// console.log( namaMurid[1] )
// console.log( namaMurid[2] )

// // Nampilin data di dalam array mulai dari awal
// for( let i = 0; i < namaMurid.length; i++){
//   console.log("Nama Murid Index ke:", i)
//   console.log( namaMurid[i] )
// }

// // Nampilin data di dalam array mulai dari akhir
// for( let i = namaMurid.length - 1; i >= 0; i-- ){
//   console.log( namaMurid[i] )
// }

// PAGINATION
// const namaMurid = ["Andi", "Budi", "Charlie", "David", "Deo", "Dory", "Eka", "Farhan", "Gargan", "Heru", "Jatmiko", "Toto", "Sakti", "Yahya", "Waluyo", "XYZ"]

// PATTERN RECOGNITION

// Page 1 mulai dari index 0
// page 2 mulai dari index 5
// page 3 mulai dari index 10

// page 1 ambil data sampai index < 5 
// page 2 ambil data sampai index < 10
// page 3 ambil data sampai index < 15 

// const page = 4
// const itemPerPage = 5

// (page - 1) * itemPerpage

// const mulaiDari = (page - 1) * itemPerPage
// const sampai = page * itemPerPage

// for( let i = mulaiDari; i < sampai; i++){
//   if( namaMurid[i] === undefined) continue;
//   console.log( namaMurid[i] )
// }


// OBJECT

// const kotak = {
//   // Properties / Kata Sifat / Kata Benda
//   panjang: 10,
//   lebar: 20,
//   tinggi: 5,
// }

// Dot
// console.log( kotak.panjang )

// Bracket
// console.log( kotak["panjang"] )

// const input = "lebar"
// console.log( kotak[input] )

// #1 Buat Function yang akan console.log volume dari kotak
// RUMUS VOLUME -> P * L * T

// #2 RESEP
// - Bikin object dengan nama Resep dengan property sebagai berikut:
//    - judul (a string)
//    - porsi (a number)
//    - bahan (an array of string)
// - Bikin Function yg akan console log Judul, Porsi, dan Bahan.
//    contoh hasil console.log:
//     Judul: Sop
//     Porsi: 4 orang
//     Bahan: 
//     kaldu
//     kentang
//     wortel

// HINT: object literals, function, for loop, '+' operator

// .map
// Merubah 1 array menjadi array lain

let angka = [1,2,3]

let angka2 = angka.map( item => item + " orang" )

console.log("angka 1: " + angka)
console.log("angka 2: " + angka2)