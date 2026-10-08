import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import bima from "./assets/images/gambar.png";

function App() {
  return (
    <BrowserRouter>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
        {" "}
        <div className="container-fluid px-4 px-lg-5">
          {/* LOGO */}

          <Link
            to="/"
            className="navbar-brand fw-bold d-flex align-items-center"
          >
            <span
              className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center me-2"
              style={{
                width: "42px",
                height: "42px",
                fontSize: "20px",
              }}
            >
              📖
            </span>

            <span>Bookstore</span>
          </Link>

          {/* MOBILE BUTTON */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAVIGATION */}

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* HOME */}

              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link px-3 ${
                      isActive ? "active fw-bold text-primary" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* BOOK */}

              <li className="nav-item">
                <NavLink
                  to="/book"
                  className={({ isActive }) =>
                    `nav-link px-3 ${
                      isActive ? "active fw-bold text-primary" : ""
                    }`
                  }
                >
                  Book
                </NavLink>
              </li>

              {/* TEAM */}

              <li className="nav-item">
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    `nav-link px-3 ${
                      isActive ? "active fw-bold text-primary" : ""
                    }`
                  }
                >
                  Team
                </NavLink>
              </li>

              {/* CONTACT */}

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link px-3 ${
                      isActive ? "active fw-bold text-primary" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* BUTTON */}

            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary">Login</button>

              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= PAGE / ROUTING ================= */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/book" element={<Book />} />

        <Route path="/team" element={<Team />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ================= FOOTER ================= */}

      <footer className="bg-dark text-white py-4">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h5 className="fw-bold mb-1">📖 Bookstore</h5>

              <p className="text-white-50 mb-0">
                Temukan cerita baru, mulai perjalanan baru.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <p className="text-white-50 mb-0">
                © 2026 Bookstore. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

/* =====================================================
   HOME
===================================================== */

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="bg-light"
        style={{
          minHeight: "calc(100vh - 75px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container-fluid px-4 px-lg-5 py-5">
          <div className="row align-items-center g-5">
            {/* TEXT */}

            <div className="col-lg-6">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-4">
                ✨ Discover Your Next Story
              </span>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(42px, 5vw, 72px)",
                  lineHeight: "1.08",
                }}
              >
                Temukan Buku
                <br />
                Favoritmu,
                <span className="text-primary"> Mulai Ceritamu.</span>
              </h1>

              <p
                className="lead text-secondary mb-4"
                style={{
                  maxWidth: "650px",
                  lineHeight: "1.8",
                }}
              >
                Selamat datang di Bookstore, tempat untuk menemukan berbagai
                buku menarik dari berbagai genre dan penulis. Temukan bacaan
                yang sesuai dengan minatmu dan mulai perjalanan baru melalui
                setiap halaman.
              </p>

              {/* BUTTON */}

              <div className="d-flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary btn-lg px-4 py-3">
                  Jelajahi Buku
                </Link>

                <Link
                  to="/team"
                  className="btn btn-outline-dark btn-lg px-4 py-3"
                >
                  Tentang Kami
                </Link>
              </div>

              {/* STATS */}

              <div className="row mt-5 g-4">
                <div className="col-4">
                  <h3 className="fw-bold mb-1">1K+</h3>

                  <p className="text-muted mb-0">Books</p>
                </div>

                <div className="col-4">
                  <h3 className="fw-bold mb-1">500+</h3>

                  <p className="text-muted mb-0">Readers</p>
                </div>

                <div className="col-4">
                  <h3 className="fw-bold mb-1">50+</h3>

                  <p className="text-muted mb-0">Authors</p>
                </div>
              </div>
            </div>

            {/* IMAGE */}

            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=85"
                  alt="Book collection"
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{
                    height: "min(70vh, 620px)",
                    minHeight: "420px",
                    objectFit: "cover",
                  }}
                />

                {/* FLOATING CARD */}

                <div
                  className="position-absolute bg-white rounded-4 shadow p-3"
                  style={{
                    left: "5%",
                    bottom: "5%",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-primary-subtle rounded-3 d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        fontSize: "24px",
                      }}
                    >
                      📚
                    </div>

                    <div>
                      <small className="text-muted">Koleksi Buku</small>

                      <div className="fw-bold fs-5">1,000+ Books</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="py-5">
        <div className="container-fluid px-4 px-lg-5 py-4">
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">WHY BOOKSTORE?</span>

            <h2 className="fw-bold mt-2">
              Semua yang Kamu Butuhkan untuk Membaca
            </h2>

            <p className="text-muted">
              Pengalaman membaca dan menemukan buku yang lebih mudah.
            </p>
          </div>

          <div className="row g-4">
            {/* FEATURE 1 */}

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div
                  className="bg-primary-subtle rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "28px",
                  }}
                >
                  📚
                </div>

                <h4 className="fw-bold">Koleksi Lengkap</h4>

                <p className="text-muted mb-0">
                  Temukan berbagai macam buku dari berbagai genre, mulai dari
                  fiksi, edukasi, teknologi hingga pengembangan diri.
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div
                  className="bg-primary-subtle rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "28px",
                  }}
                >
                  🔍
                </div>

                <h4 className="fw-bold">Mudah Dicari</h4>

                <p className="text-muted mb-0">
                  Temukan buku yang kamu inginkan dengan cepat melalui katalog
                  yang sederhana dan mudah digunakan.
                </p>
              </div>
            </div>

            {/* FEATURE 3 */}

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div
                  className="bg-primary-subtle rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "28px",
                  }}
                >
                  ❤️
                </div>

                <h4 className="fw-bold">Nyaman Digunakan</h4>

                <p className="text-muted mb-0">
                  Tampilan website dibuat sederhana, modern, responsif, dan
                  nyaman digunakan di berbagai perangkat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-primary text-white py-5">
        <div className="container-fluid px-4 px-lg-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold">Siap Menemukan Buku Favoritmu?</h2>

              <p className="mb-0 text-white-50">
                Jelajahi koleksi kami dan temukan cerita baru hari ini.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link to="/book" className="btn btn-light btn-lg px-4">
                Lihat Koleksi Buku
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =====================================================
   BOOK
===================================================== */

function Book() {
  const books = [
    {
      title: "The Great Adventure",
      author: "John Carter",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=85",
    },

    {
      title: "A New Beginning",
      author: "Sarah Wilson",
      category: "Fiction",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85",
    },

    {
      title: "The Art of Reading",
      author: "Michael Brown",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=700&q=85",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container-fluid px-4 px-lg-5 py-4">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">OUR COLLECTION</span>

          <h1 className="fw-bold mt-2">Koleksi Buku</h1>

          <p className="text-muted">
            Pilihan buku menarik untuk menemani waktu membaca.
          </p>
        </div>

        <div className="row g-4">
          {books.map((book, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="card-img-top"
                  style={{
                    height: "420px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">
                  <span className="badge bg-primary-subtle text-primary mb-2">
                    {book.category}
                  </span>

                  <h4 className="fw-bold">{book.title}</h4>

                  <p className="text-muted mb-0">By {book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   TEAM
===================================================== */

function Team() {
  const members = [
    {
      name: "Bima Wahyu",
      role: "Frontend Developer",
      description:
        "Bertanggung jawab dalam membangun tampilan website menggunakan React dan Bootstrap.",
      image: bima,
    },

    {
      name: "Nama Anggota 2",
      role: "UI/UX Designer",
      description:
        "Merancang tampilan antarmuka yang menarik, sederhana, dan mudah digunakan.",
      image: "https://i.pravatar.cc/500?img=5",
    },

    {
      name: "Nama Anggota 3",
      role: "Backend Developer",
      description:
        "Mengembangkan sistem dan memastikan proses aplikasi dapat berjalan dengan baik.",
      image: "https://i.pravatar.cc/500?img=8",
    },
  ];

  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-lg-5 py-4">
        {/* TITLE */}

        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">OUR TEAM</span>

          <h1 className="fw-bold mt-2">Meet Our Team</h1>

          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            Kami adalah tim yang bekerja sama untuk membangun website Bookstore
            dengan teknologi modern.
          </p>
        </div>

        {/* TEAM */}

        <div className="row g-4 justify-content-center">
          {members.map((member, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="pt-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle shadow"
                    style={{
                      width: "170px",
                      height: "170px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="card-body p-4">
                  <h3 className="fw-bold">{member.name}</h3>

                  <p className="text-primary fw-semibold">{member.role}</p>

                  <p className="text-muted">{member.description}</p>

                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-outline-primary btn-sm">
                      Facebook
                    </button>

                    <button className="btn btn-outline-dark btn-sm">
                      Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TEAM DESCRIPTION */}

        <div className="row justify-content-center mt-5">
          <div className="col-lg-9">
            <div className="bg-light rounded-4 p-4 p-lg-5 text-center">
              <h3 className="fw-bold mb-3">Bersama Membangun Solusi Digital</h3>

              <p className="text-muted mb-0">
                Setiap anggota memiliki peran yang berbeda dan saling bekerja
                sama untuk menghasilkan website yang menarik, responsif, dan
                mudah digunakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   CONTACT
===================================================== */

function Contact() {
  return (
    <section className="py-5 bg-light">
      <div className="container-fluid px-4 px-lg-5 py-4">
        {/* TITLE */}

        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">CONTACT US</span>

          <h1 className="fw-bold mt-2">Hubungi Kami</h1>

          <p className="text-muted">
            Kami siap menerima pertanyaan, saran, dan masukan dari kamu.
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* ================= INFO ================= */}

          <div className="col-lg-5">
            <div className="pe-lg-5">
              <h2 className="fw-bold mb-4">Let's Talk</h2>

              <p className="text-muted mb-5">
                Jika kamu memiliki pertanyaan mengenai Bookstore, silakan
                hubungi kami melalui informasi yang tersedia atau kirimkan pesan
                menggunakan form di samping.
              </p>

              {/* ADDRESS */}

              <div className="d-flex mb-4">
                <div
                  className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "22px",
                  }}
                >
                  📍
                </div>

                <div className="ms-3">
                  <h6 className="fw-bold mb-1">Address</h6>

                  <p className="text-muted mb-0">
                    Depok, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>

              {/* EMAIL */}

              <div className="d-flex mb-4">
                <div
                  className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "22px",
                  }}
                >
                  ✉️
                </div>

                <div className="ms-3">
                  <h6 className="fw-bold mb-1">Email</h6>

                  <p className="text-muted mb-0">bookstore@example.com</p>
                </div>
              </div>

              {/* PHONE */}

              <div className="d-flex">
                <div
                  className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "55px",
                    height: "55px",
                    fontSize: "22px",
                  }}
                >
                  📞
                </div>

                <div className="ms-3">
                  <h6 className="fw-bold mb-1">Phone</h6>

                  <p className="text-muted mb-0">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>

                <form>
                  {/* NAME + EMAIL */}

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">Name</label>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Masukkan nama"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">Email</label>

                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Masukkan email"
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Subject</label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Masukkan subject"
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Message</label>

                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Tulis pesan kamu..."
                    ></textarea>
                  </div>

                  {/* BUTTON */}

                  <button type="submit" className="btn btn-primary btn-lg px-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
