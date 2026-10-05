// **Data Produk (Minimal 5)**
let produklist = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Smartwatch", harga: 2000000 },
  { id: 5, nama: "Headset", harga: 1000000 }
];

// Event Handler (Contoh penerapan Event Listener)
const eventHandler = {
  inisialisasi: function() {
    console.log("Sistem manajemen produk siap digunakan.");
  }
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  // Menggunakan spread operator untuk menambahkan objek produk baru ke dalam array
  const produkBaru = { id, nama, harga };
  produklist = [...produklist, produkBaru];
  console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// **Menghapus Produk dengan Rest Parameter**
// Menggunakan rest parameter (...ids) agar fungsi bisa menerima satu atau lebih ID sekaligus
function hapusProduk(...ids) {
  produklist = produklist.filter(produk => !ids.includes(produk.id));
  console.log(`Produk dengan ID ${ids.join(', ')} berhasil dihapus.`);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("\n--- Daftar Produk ---");
  produklist.forEach(produk => {
    // Menggunakan object destructuring untuk mengambil properti nama dan harga
    const { id, nama, harga } = produk;
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp ${harga.toLocaleString('id-ID')}`);
  });
  console.log("---------------------\n");
}

// --- Pengujian Program ---
eventHandler.inisialisasi();

// Menampilkan produk awal
tampilkanProduk();

// Contoh penambahan data baru
tambahProduk(6, "Kamera", 8500000);
tampilkanProduk();

// Contoh penghapusan data (menggunakan rest parameter)
hapusProduk(2);
tampilkanProduk();