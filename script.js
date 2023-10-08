
//ini adalah contoh if
let nilai = 88;

if (nilai >= 92) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
  
  if (nilai < 50) {
    console.log("Anda perlu belajar lebih keras!");
  }
}



//ini adalah switch case tentang hari
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin Wak.");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa Coy.");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu cok.");
    break;
  case "Kamis":
    console.log("Hari ini adalah Kamis bro.");
    break;
  case "Jumat":
    console.log("Hari ini adalah Jumat bre.");
    break;
  case "Sabtu":
    console.log("Hari ini adalah Sabtu libur.");
    break;
  case "Minggu":
    console.log("Hari ini adalah Minggu juga libur.");
    break;
  default:
    console.log("Hari tidak valid. ntah apa apa ko masukkan.");
}


//Ini adalah for pola bintang
for (let baris = 1; baris <= 5; baris++) {
    let bintang = "";
    for (let kolom = 1; kolom <= baris; kolom++) {
      bintang += "*";
    }
    console.log(bintang);
  }
  




  //Ini while menghitung mundur 10 ke 1
  let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

//ini adalah do while
let count = 1;

do {
  console.log("Iterasi ke-" + count);
  count++;
} while (count <= 5);




//Ini Function
function tambah(angka1, angka2) {
    return angka1 + angka2;
  }
  
let hasilTambah = tambah(4, 3);
console.log("Hasil penambahan: " + hasilTambah);
