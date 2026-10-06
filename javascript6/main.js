import { index, store, destroy } from "./controller.js";

const main = () => {
  console.log("Data Awal:");
  index();

  store(); // Menambahkan 2 data baru

  console.log("\nData Setelah Penambahan:");
  index();

  destroy(); // Menghapus data

  console.log("\nData Setelah Penghapusan:");
  index();
};

main();