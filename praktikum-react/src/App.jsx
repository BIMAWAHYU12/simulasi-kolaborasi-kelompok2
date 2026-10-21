
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import bima from "./assets/images/gambar.png";
import initialBooks from "./utils/books";

function App() {
  // Data buku dapat ditambahkan melalui form.
  const [books, setBooks] = useState(initialBooks);

  function addBook(newBook) {
    setBooks((currentBooks) => [
      ...currentBooks,
      { ...newBook, id: Date.now() },
    ]);
  }

  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
        <div className="container-fluid px-4 px-lg-5">
          <Link
            to="/"
            className="navbar-brand fw-bold d-flex align-items-center"
          >
            <span
              className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center me-2"
              style={{ width: "42px", height: "42px", fontSize: "20px" }}
            >
              📖
            </span>
            <span>Bookstore</span>
          </Link>

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

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {[
                { to: "/", label: "Home", end: true },
                { to: "/book", label: "Book" },
                { to: "/team", label: "Team" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li className="nav-item" key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `nav-link px-3 ${
                        isActive ? "active fw-bold text-primary" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="d-flex gap-2">
              <button type="button" className="btn btn-outline-primary">
                Login
              </button>
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ROUTING */}
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route
          path="/book"
          element={<Book books={books} onAddBook={addBook} />}
        />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* FOOTER */}
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
   KOMPONEN KARTU BUKU
===================================================== */

function BookCard({ book, compact = false }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card border-0 shadow-sm h-100 overflow-hidden">
        <img
          src={book.image}
          alt={`Sampul ${book.title}`}
          className="card-img-top"
          style={{
            height: compact ? "280px" : "350px",
            objectFit: "cover",
          }}
        />

        <div className="card-body p-4">
          <span className="badge bg-primary-subtle text-primary mb-2">
            {book.category || "Buku"}
          </span>
          <h4 className="fw-bold">{book.title}</h4>
          <p className="text-muted mb-2">Oleh {book.author}</p>
          <p className="text-secondary">{book.description}</p>
          {book.year && (
            <small className="text-muted">
              Tahun terbit: {book.year}
            </small>
          )}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   HOME
===================================================== */

function Home({ books }) {
  return (
    <>
      {/* HERO */}
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
                style={{ maxWidth: "650px", lineHeight: "1.8" }}
              >
                Selamat datang di Bookstore, tempat untuk menemukan berbagai
                buku menarik dari berbagai genre dan penulis. Temukan bacaan
                yang sesuai dengan minatmu dan mulai perjalanan baru melalui
                setiap halaman.
              </p>

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

              <div className="row mt-5 g-4">
                <div className="col-4">
                  <h3 className="fw-bold mb-1">{books.length}</h3>
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

            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=85"
                  alt="Koleksi buku"
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{
                    height: "min(70vh, 620px)",
                    minHeight: "420px",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="position-absolute bg-white rounded-4 shadow p-3"
                  style={{ left: "5%", bottom: "5%" }}
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
                      <div className="fw-bold fs-5">{books.length} Buku</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
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
            {[
              {
                icon: "📚",
                title: "Koleksi Lengkap",
                description:
                  "Temukan buku dari berbagai genre, mulai dari fiksi, edukasi, teknologi hingga pengembangan diri.",
              },
              {
                icon: "🔍",
                title: "Mudah Dicari",
                description:
                  "Temukan buku yang kamu inginkan melalui katalog yang sederhana dan mudah digunakan.",
              },
              {
                icon: "❤️",
                title: "Nyaman Digunakan",
                description:
                  "Tampilan website modern, responsif, dan nyaman digunakan di berbagai perangkat.",
              },
            ].map((feature) => (
              <div className="col-md-4" key={feature.title}>
                <div className="card border-0 shadow-sm h-100 p-4">
                  <div
                    className="bg-primary-subtle rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "65px",
                      height: "65px",
                      fontSize: "28px",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="fw-bold">{feature.title}</h4>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="py-5 bg-light">
        <div className="container-fluid px-4 px-lg-5 py-4">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
              <span className="text-primary fw-semibold">PILIHAN UNTUKMU</span>
              <h2 className="fw-bold mt-2">Buku Pilihan</h2>
              <p className="text-muted mb-0">
                Temukan bacaan menarik dari koleksi kami.
              </p>
            </div>
            <Link to="/book" className="btn btn-outline-primary">
              Lihat Semua
            </Link>
          </div>

          <div className="row g-4">
            {books.slice(0, 3).map((book) => (
              <BookCard key={book.id} book={book} compact />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
   BOOK + FORM TAMBAH BUKU
===================================================== */

function Book({ books, onAddBook }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert("Judul dan penulis wajib diisi.");
      return;
    }

    onAddBook({
      title: title.trim(),
      author: author.trim(),
      year: year ? Number(year) : "",
      category: category.trim() || "Umum",
      description: description.trim() || "Belum ada deskripsi.",
      image:
        image.trim() ||
        "https://placehold.co/300x400?text=Book",
    });

    setTitle("");
    setAuthor("");
    setYear("");
    setCategory("");
    setDescription("");
    setImage("");
    setShowForm(false);
  }

  return (
    <section className="py-5 bg-light">
      <div className="container-fluid px-4 px-lg-5 py-4">
        <div className="text-center mb-4">
          <span className="text-primary fw-semibold">OUR COLLECTION</span>
          <h1 className="fw-bold mt-2">Koleksi Buku</h1>
          <p className="text-muted">
            Jelajahi dan tambahkan buku ke koleksi Bookstore.
          </p>

          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Tutup Form" : "+ Tambah Buku"}
          </button>
        </div>

        {showForm && (
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Tambah Buku Baru</h4>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Judul Buku *</label>
                        <input
                          className="form-control"
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}
                          placeholder="Contoh: Belajar React"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Penulis *</label>
                        <input
                          className="form-control"
                          value={author}
                          onChange={(event) => setAuthor(event.target.value)}
                          placeholder="Nama penulis"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Tahun Terbit</label>
                        <input
                          className="form-control"
                          type="number"
                          min="0"
                          value={year}
                          onChange={(event) => setYear(event.target.value)}
                          placeholder="Contoh: 2025"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Kategori</label>
                        <input
                          className="form-control"
                          value={category}
                          onChange={(event) =>
                            setCategory(event.target.value)
                          }
                          placeholder="Contoh: Teknologi"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Deskripsi</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          value={description}
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
                          placeholder="Deskripsi singkat buku"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">URL Gambar Sampul</label>
                        <input
                          className="form-control"
                          type="url"
                          value={image}
                          onChange={(event) => setImage(event.target.value)}
                          placeholder="https://contoh.com/sampul.jpg"
                        />
                      </div>

                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Simpan Buku
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">Semua Buku</h4>
          <span className="badge bg-primary">{books.length} Buku</span>
        </div>

        <div className="row g-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
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
        "Mengembangkan sistem dan memastikan proses aplikasi berjalan dengan baik.",
      image: "https://i.pravatar.cc/500?img=8",
    },
  ];

  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-lg-5 py-4">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">OUR TEAM</span>
          <h1 className="fw-bold mt-2">Meet Our Team</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            Kami adalah tim yang bekerja sama untuk membangun website Bookstore
            dengan teknologi modern.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {members.map((member) => (
            <div className="col-md-6 col-lg-4" key={member.name}>
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
                    <button type="button" className="btn btn-outline-primary btn-sm">
                      Facebook
                    </button>
                    <button type="button" className="btn btn-outline-dark btn-sm">
                      Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-9">
            <div className="bg-light rounded-4 p-4 p-lg-5 text-center">
              <h3 className="fw-bold mb-3">
                Bersama Membangun Solusi Digital
              </h3>
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
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">CONTACT US</span>
          <h1 className="fw-bold mt-2">Hubungi Kami</h1>
          <p className="text-muted">
            Kami siap menerima pertanyaan, saran, dan masukan dari kamu.
          </p>
        </div>

        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <div className="pe-lg-5">
              <h2 className="fw-bold mb-4">Let's Talk</h2>
              <p className="text-muted mb-5">
                Jika kamu memiliki pertanyaan mengenai Bookstore, silakan
                hubungi kami melalui informasi yang tersedia atau kirimkan
                pesan menggunakan form di samping.
              </p>

              {[
                {
                  icon: "📍",
                  title: "Address",
                  text: "Depok, Jawa Barat, Indonesia",
                },
                {
                  icon: "✉️",
                  title: "Email",
                  text: "bookstore@example.com",
                },
                {
                  icon: "📞",
                  title: "Phone",
                  text: "+62 812-3456-7890",
                },
              ].map((item) => (
                <div className="d-flex mb-4" key={item.title}>
                  <div
                    className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "55px",
                      height: "55px",
                      fontSize: "22px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="text-muted mb-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>

                <form onSubmit={(event) => {
                  event.preventDefault();
                  alert("Terima kasih! Pesan kamu sudah disiapkan.");
                }}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Masukkan nama"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Masukkan email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Subject</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Masukkan subject"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Tulis pesan kamu..."
                      required
                    />
                  </div>

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

/* =====================================================
   HALAMAN TIDAK DITEMUKAN
===================================================== */

function NotFound() {
  return (
    <section className="container text-center py-5">
      <h1 className="display-4 fw-bold">404</h1>
      <p className="text-muted">Halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/" className="btn btn-primary">
        Kembali ke Home
      </Link>
    </section>
  );
}

export default App;
