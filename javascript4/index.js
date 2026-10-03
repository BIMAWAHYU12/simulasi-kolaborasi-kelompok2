// Class Pelanggan untuk merepresentasikan data pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = []; // Menyimpan daftar kendaraan yang disewa
    }

    // Metode untuk mencatat transaksi penyewaan kendaraan oleh pelanggan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa.push(kendaraan);
        console.log(`Transaksi Berhasil: ${this.nama} telah menyewa ${kendaraan}.`);
    }

    // Metode untuk menampilkan informasi pelanggan beserta kendaraan yang disewa
    tampilkanInfo() {
        console.log(`Nama Pelanggan  : ${this.nama}`);
        console.log(`Nomor Telepon   : ${this.nomorTelepon}`);
        console.log(`Kendaraan Disewa: ${this.kendaraanDisewa.length > 0 ? this.kendaraanDisewa.join(', ') : 'Belum ada kendaraan yang disewa'}`);
        console.log('-------------------------------------------');
    }
}

// Sistem Manajemen untuk mengelola daftar pelanggan yang sedang menyewa kendaraan
class SistemManajemenTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    // Menambahkan pelanggan baru ke dalam sistem
    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    // Sistem yang menampilkan daftar pelanggan yang sedang menyewa kendaraan
    tampilkanDaftarPelanggan() {
        console.log("=== DAFTAR PELANGGAN YANG MENYEWA KENDARAAN ===");
        if (this.daftarPelanggan.length === 0) {
            console.log("Belum ada data pelanggan di dalam sistem.");
        } else {
            this.daftarPelanggan.forEach((pelanggan, index) => {
                console.log(`Pelanggan ke-${index + 1}:`);
                pelanggan.tampilkanInfo();
            });
        }
    }
}

// ==========================================
// CONTOH PENGGUNAAN / IMPLEMENTASI PROGRAM
// ==========================================

// 1. Inisialisasi sistem manajemen
const sistemTransportasi = new SistemManajemenTransportasi();

// 2. Membuat objek pelanggan
const pelanggan1 = new Pelanggan("Bima Wahyu", "081234567890");
const pelanggan2 = new Pelanggan("Siti Rahma", "089876543210");

// 3. Mencatat transaksi penyewaan kendaraan oleh pelanggan
pelanggan1.sewaKendaraan("Mobil Avanza");
pelanggan1.sewaKendaraan("Motor Honda Beat");

pelanggan2.sewaKendaraan("Mobil Pajero");

// 4. Memasukkan pelanggan ke dalam sistem manajemen
sistemTransportasi.tambahPelanggan(pelanggan1);
sistemTransportasi.tambahPelanggan(pelanggan2);

// 5. Menampilkan daftar pelanggan yang sedang menyewa kendaraan melalui sistem
sistemTransportasi.tampilkanDaftarPelanggan();