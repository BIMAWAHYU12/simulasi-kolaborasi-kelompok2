import users from "./data.mjs";

// menampilkan data menggunakan map()
const index = () => {
    console.log("=== DATA USERS ===");

    users.map((user, index) => {
        console.log(
            `${index + 1}. ${user.nama} | ${user.umur} tahun | ${user.alamat} | ${user.email}`
        );
    });
};

// menambahkan data
const store = (user) => {
    users.push(user);
};

// menghapus data
const destroy = () => {
    users.pop();
};

export { index, store, destroy };