// const kotak = {
//   // Properties / Kata Sifat / Kata Benda
//   panjang: 10,
//   lebar: 20,
//   tinggi: 5
// }

// const kotak2 = {
//   // Properties / Kata Sifat / Kata Benda
//   panjang: 30,
//   lebar: 25,
//   tinggi: 7,
// }

// console.log(kotak.panjang);
// console.log(kotak.lebar);
// console.log(kotak.tinggi);

// // Function Volume
// const volume = (args) => console.log(`Volume = ${args.panjang * args.lebar * args.tinggi}`)

// volume(kotak);
// volume(kotak2);


// #2 RESEP
// - Bikin object dengan nama Resep dengan property sebagai berikut:
const resep = {
  //    - judul (a string)
  judul: "Rendang",
  //    - porsi (a number)
  porsi: 8,
  //    - bahan (an array of string)
  bahan: ["daging", "bumbu", "nasi",],
}

// - Bikin Function yg akan console log 
function print(obj) {
  // Judul,
  console.log(`Judul: ${obj.judul}`);
  // Porsi, dan 
  console.log(`Porsi: ${obj.porsi} orang`);
  // Bahan.
  console.log('Bahan:');
  for (let i = 0; i < obj.bahan.length; i++){
    console.log(obj.bahan[i]);
  }
}

print(resep)

//    contoh hasil console.log:
//     Judul: Sop
//     Porsi: 4 orang
//     Bahan: 
//     kaldu
//     kentang
//     wortel