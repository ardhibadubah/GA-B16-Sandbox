// let var1 = 1
// var1 += 3
// console.log(var1);

// FUNCTION DECLARATION
// function ageChecker(age) {
//     if(age <= 18) {
//         console.log('Umur dibawah 18 tahun termasuk dibawah umur');
//     } else {
//         console.log('Umur diatas 18 tahun sudah cukup umur');
//     }
// }

// INVOKING THE FUNCTION
// ageChecker(18)

// function scoreConverter() {
//     const score = 97

//     if ( score <= 100 &&  score >= 91) {
//         console.log("A");
//     } else if ( score <= 90 && score >= 81) {
//         console.log("B");
//     } else if( score <= 80 && score >= 71 ) {     
//         console.log("C");
//     } else if( score <= 70 && score >= 51 ) {
//         console.log("D");
//     } else if( score <= 50 && score >= 0 ) {
//         console.log("E");
//     } else {
//         console.log("Bukan Huruf");
//     }
// }
// scoreConverter()

// const namaMurid = ["Ardhi", "Nia", "Edo"]

// for(let i = 2; i < namaMurid; i++) {
//     console.log( namaMurid[i] )
// }

// ayo mas edo 

const kotak = {
    // Properties / Kata Sifat / Kata Benda
    panjang: 10,
    lebar: 20,
    tinggi: 5
    
  } 
  
//   FUNCTION DECLARATION
// function volume(){
//     const volume = kotak.panjang * kotak.lebar * kotak.tinggi
//     console.log(volume);
// };
// // Manggil function
// volume();

//   console.log(kotak.panjang);
//   console.log(kotak.lebar);
//   console.log(kotak.tinggi);

    
const resep = {
    judul: "ayam bumbu kacang",
    porsi: 10,
    bahan:["ayam","rempah","bumbu","kacang"],
}

function makanan(object, object2) {
    console.log("judul:" + object.judul);
    console.log( "porsi:" + object.porsi + " Orang " );
    console.log("bahan:");
    for (let i = 0; i < object.bahan.length; i++){
        console.log(object["bahan"][i]);
    }
}

makanan(resep)
