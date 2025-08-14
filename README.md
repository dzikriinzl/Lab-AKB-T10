# Tugas 10: Aplikasi Mobile Mahasiswa Expo Router

Aplikasi ini dibuat sebagai bagian dari tugas mata kuliah untuk mendemonstrasikan penggunaan `Expo Router` dalam membangun aplikasi mobile dengan navigasi `tab bar`. Aplikasi ini menampilkan daftar mahasiswa dengan detail, serta beberapa halaman informasi tambahan.

## Fitur Utama

-   **Daftar Mahasiswa**: Menampilkan daftar mahasiswa dari data lokal.
-   **Detail Mahasiswa**: Menampilkan informasi lengkap (nama, NIM, foto) ketika nama mahasiswa diklik.
-   **Navigasi Berbasis Tab**: Menggunakan Expo Router untuk navigasi yang rapi dengan tab bar di bagian bawah.
-   **Tiga Halaman Utama**:
    -   **Mahasiswa**: Halaman utama yang menampilkan daftar mahasiswa.
    -   **Home**: Menampilkan informasi tentang Universitas Muhammadiyah Makassar (Unismuh Makassar).
    -   **About**: Menyediakan penjelasan tentang aplikasi dan teknologi yang digunakan.
    -   **Profil**: Menampilkan data diri pribadi pengembang dan foto profil.

-   **Penggunaan Font Kustom**: Menggunakan beberapa font kustom yang dimuat dari folder `assets/fonts`.

-   **Komponen Dasar**: Seluruh aplikasi dibangun dengan memanfaatkan komponen dasar dari React Native.

## Struktur Proyek

Berikut adalah struktur proyek yang digunakan:

├── .expo

├── .vscode

├── app

│   ├── (tabs)

│   │   ├── _layout.tsx

│   │   ├── about.tsx

│   │   ├── index.tsx      # Daftar Mahasiswa

│   │   ├── mahasiswa.tsx  # Halaman Home (Unismuh)

│   │   └── profil.tsx

│   ├── student

│   │   └── [id].tsx       # Halaman Detail Mahasiswa

│   └── data

│       └── students.js    # Data mahasiswa

├── assets

│   ├── fonts

│   └── images

│       ├── Dzikri.jpeg

│       ├── exporouter.png

│       ├── react-native-and-expo-cover.jpg

│       └── unismuh.png

├── node_modules

├── .gitignore

├── app.json

├── eslint.config.js

├── expo-env.d.ts

├── package-lock.json

├── package.json

├── README.md

└── tsconfig.json

## Teknologi yang Digunakan

-   **React Native**: Kerangka kerja untuk membangun aplikasi mobile lintas platform.
-   **Expo**: Kumpulan alat dan layanan untuk mempermudah pengembangan React Native.
-   **Expo Router**: Sistem routing berbasis file yang efisien untuk navigasi.
-   **Font Kustom**: Digunakan untuk meningkatkan estetika dan pengalaman pengguna.

## Cara Menjalankan Aplikasi

1.  Pastikan Anda telah menginstal Node.js dan Expo Go di perangkat seluler Anda.
2.  Clone repositori ini:
    ```bash
    git clone [URL-REPOSITORI-ANDA]
    cd [NAMA-FOLDER-PROYEK]
    ```
3.  Instal semua dependensi:
    ```bash
    npm install
    # atau
    yarn install
    ```
4.  Jalankan aplikasi di mode pengembangan:
    ```bash
    npx expo start
    ```
5.  Pindai kode QR yang muncul di terminal menggunakan aplikasi Expo Go di ponsel Anda.

---

Terima kasih telah menggunakan aplikasi ini.