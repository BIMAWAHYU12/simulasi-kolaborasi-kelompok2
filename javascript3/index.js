// 1. Array produkToko dengan struktur data awal
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// 2. Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
  console.log("=== DAFTAR PRODUK TOKO ===");
  if (produkToko.length === 0) {
    console.log("Tidak ada produk yang tersedia.");
    return;
  }
  
  produkToko.forEach(produk => {
    console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga.toLocaleString('id-ID')} | Stok: ${produk.stok}`);
  });
  console.log("==========================\n");
}

// 3. Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
  const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  
  const produkBaru = {
    id: idBaru,
    nama: nama,
    harga: harga,
    stok: stok
  };
  
  produkToko.push(produkBaru);
  console.log(`> Sukses: Produk "${nama}" berhasil ditambahkan!\n`);
}

// 4. Fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
  const index = produkToko.findIndex(produk => produk.id === id);
  
  if (index !== -1) {
    const produkDihapus = produkToko.splice(index, 1);
    console.log(`> Sukses: Produk "${produkDihapus[0].nama}" (ID: ${id}) berhasil dihapus!\n`);
  } else {
    console.log(`> Gagal: Produk dengan ID ${id} tidak ditemukan.\n`);
  }
}


// ==========================================
// PENGUJIAN / MENJALANKAN FUNGSI
// ==========================================

// Menampilkan produk awal
tampilkanProduk();

// Menambahkan produk baru (Monitor)
tambahProduk("Monitor", 1500000, 4);

// Tampilkan kembali setelah penambahan
tampilkanProduk();

// Menghapus produk (Mouse dengan ID 2)
hapusProduk(2);

// Tampilkan daftar produk terakhir
tampilkanProduk();