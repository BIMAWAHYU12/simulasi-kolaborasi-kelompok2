import { index, store, destroy } from "./controller.mjs";

const main = () => {

    // menambahkan minimal 2 data
    store({
        nama: "Bunga",
        umur: 20,
        alamat: "Jl. Tambahan 1",
        email: "bunga@gmail.com"
    });

    store({
        nama: "Citra",
        umur: 21,
        alamat: "Jl. Tambahan 2",
        email: "citra@gmail.com"
    });

    // menampilkan data
    index();

    // menghapus data
    destroy();

    console.log("\n=== SETELAH DATA DIHAPUS ===");

    // menampilkan data lagi
    index();
};

main();