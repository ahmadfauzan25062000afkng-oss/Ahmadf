let kesempatan = 3;
while (kesempatan > 0) {
  // menangkap pilihan player
  let p = prompt('Pilih Salah Satu Angka :\n' + '1,2,3,4,5,6,7,8,9,10');
  // membagkitkan bilangan random
  let comp = Math.floor(Math.random () *10) +1;
  // mengubah input computer menjadi integer
  p = parseInt (p);
  // kondisi tebakan permainan
  if (p == comp) {
    alert ('selamat! anda benar.');
  } else kesempatan--; {
    if (kesempatan > 0) {
      alert ('Maaf, Tebakan Anda Salah. Coba Lagi!');
    } else {
      alert ('Maaf, kesempatan Anda Telah Habis. Angka Yang Benar Adalah ' + comp);
    }

  }
}