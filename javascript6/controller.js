import users from "./data.js";

// Fungsi untuk melihat/menampilkan data menggunakan map()
export const index = () => {
  console.log("=== DAFTAR USER ===");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

// Fungsi untuk menambah minimal 2 data menggunakan push
export const store = () => {
  console.log("\n=== MENAMBAH DATA BARU ===");
  users.push(
    { nama: "Data 11", umur: 30, alamat: "Alamat 11", email: "data11@email.com" },
    { nama: "Data 12", umur: 31, alamat: "Alamat 12", email: "data12@email.com" }
  );
  console.log("2 data baru berhasil ditambahkan!");
};

// Fungsi untuk menghapus data (contoh menggunakan splice untuk menghapus data terakhir)
export const destroy = () => {
  console.log("\n=== MENGHAPUS DATA ===");
  const removed = users.pop(); // atau menggunakan splice
  console.log(`Data atas nama '${removed.nama}' berhasil dihapus.`);
};