var tanya = true;
let skorLu = 0;
let skorHp = 0;
while (tanya) {
  // menagkap pilihan player
  let p = prompt('Pilih : Batu, Kertas, Gunting.');
  //menangkap pilihan Hp saya
  //membangkitkan bilangan random
  let comp = Math.random();
  if (comp < 0.33) {
    comp = 'Batu';
  } else if (comp >= 0.33 && comp > 0.66) {
    comp = 'Kertas';
  } else {
    comp = 'Gunting';
  }
  console.log (comp);
  let hasil = '';

  //menentukan rules
  if (p == comp) {
    hasil = 'SERI';
  } else if (p == 'Gunting') {
    hasil = (comp == 'Batu') ? 'KALAH': 'MENANG';
    if (hasil == 'MENANG') {
      skorLu++;
    } else {
      skorHp++;
    }
  } else if (p == 'Batu') {
    hasil = (comp == 'Gunting') ? 'MENANG': 'KALAH';
    if (hasil == 'MENANG') {
      skorLu++;
    } else {
      skorHp++;
    }
  } else if (p == 'Kertas') {
    hasil = (comp == 'Gunting') ? 'KALAH': 'MENANG';
    if (hasil == 'MENANG') {
      skorLu++;
    } else {
      skorHp++;
    }
  } else {
    hasil = 'Anda Memasukan Pilihan Yang Salah';
  }
  // tampilkan hasilnya
  alert ('Milih Apa Bro: ' + p + ' \nDan Hp Lu Memilih : ' + comp + ' \nMaka Lu Bro Hasilnya : ' + hasil);
  tanya = confirm ('Lagi Kaga Bro..?');
  if (tanya == true) {
    alert ('Serius Bro Lagi...?');
  } else {
    alert ('Terima Kasih Bro Sudah Bermain.');
  }
}
// ...di luar loop while
alert ('Skor Akhir: Lu Bro ' + skorLu + ' - ' + skorHp + ' Si Hp');
if (skorLu > skorHp) {
  alert('Selamat, Bro! Lu Menang!');
} else if (skorLu < skorHp) {
  alert('Maaf, Bro. Lu Bego!');
} else {
  alert('Hasilnya Seri, Bro!');
}
