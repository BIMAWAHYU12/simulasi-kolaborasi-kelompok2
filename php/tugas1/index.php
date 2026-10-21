<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Penilaian Ujian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 50px;
        }
        .container {
            max-width: 450px;
            background: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: auto;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        input[type="text"], 
        input[type="email"], 
        input[type="number"] {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background-color: #007BFF;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
        }
        button:hover {
            background-color: #0056b3;
        }
        .result {
            margin-top: 25px;
            padding: 15px;
            background: #e9ecef;
            border-left: 5px solid #007BFF;
            border-radius: 4px;
        }
        .lulus {
            color: #28a745;
            font-weight: bold;
        }
        .remedial {
            color: #dc3545;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Form Penilaian Ujian</h2>
    
    <!-- Form HTML dengan metode POST -->
    <form method="POST" action="">
        <div class="form-group">
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="nilai">Nilai Ujian:</label>
            <input type="number" id="nilai" name="nilai" min="0" max="100" required>
        </div>
        
        <button type="submit" name="submit">Proses Nilai</button>
    </form>

    <?php
    // Memeriksa apakah form telah disubmit
    if (isset($_POST['submit'])) {
        // Mengambil dan membersihkan data dari form untuk keamanan
        $nama = htmlspecialchars($_POST['nama']);
        $email = htmlspecialchars($_POST['email']);
        $nilai = (int) $_POST['nilai'];

        // Struktur Kendali untuk menentukan status kelulusan
        if ($nilai > 70) {
            $status = "Lulus";
            $kelas_status = "lulus";
        } elseif ($nilai == 70) {
            $status = "Lulus (Batas Minimum)";
            $kelas_status = "lulus";
        } else {
            $status = "Remedial";
            $kelas_status = "remedial";
        }

        // Menampilkan output ke dalam halaman browser
        echo '<div class="result">';
        echo '<h3>Hasil Evaluasi Ujian</h3>';
        echo '<p><strong>Nama:</strong> ' . $nama . '</p>';
        echo '<p><strong>Email:</strong> ' . $email . '</p>';
        echo '<p><strong>Nilai Ujian:</strong> ' . $nilai . '</p>';
        echo '<p><strong>Status:</strong> <span class="' . $kelas_status . '">' . $status . '</span></p>';
        echo '</div>';
    }
    ?>
</div>

</body>
</html>