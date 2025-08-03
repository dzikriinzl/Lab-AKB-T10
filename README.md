# Tugas 8: Aplikasi Mobile Expo Router

Aplikasi ini dibuat sebagai bagian dari tugas mata kuliah untuk mendemonstrasikan penggunaan `Expo Router` dalam membangun aplikasi mobile dengan navigasi `tab bar`. Aplikasi ini terdiri dari tiga halaman utama: Home, About, dan Profil.

## Fitur Utama

-   **Navigasi Tab Bar**: Menggunakan Expo Router untuk menyediakan navigasi tab bar yang intuitif di bagian bawah layar.

-   **Tiga Halaman Utama**:
    -   **Home**: Menampilkan informasi tentang Universitas Muhammadiyah Makassar (Unismuh Makassar) dengan gambar `unismuh.png`.
    -   **About**: Menyediakan penjelasan tentang aplikasi dan teknologi yang digunakan, dengan gambar ilustrasi seperti `exporouter.png` dan `react-native-and-expo-cover.jpg`.
    -   **Profil**: Menampilkan data diri pribadi pengembang dan foto profil `Dzikri.jpeg`.

-   **Penggunaan Font Kustom**: Menggunakan beberapa font kustom yang dimuat dari folder `assets/fonts`.

-   **Komponen Dasar**: Seluruh aplikasi dibangun dengan memanfaatkan komponen dasar dari React Native.

## Struktur Proyek

Berikut adalah struktur proyek yang digunakan:

├── .expo

├── .vscode

├── app

│   └── (tabs)

│       ├── _layout.tsx

│       ├── about.tsx

│       ├── index.tsx

│       └── profil.tsx

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
    git clone https://github.com/dzikriinzl/LAB-T8
    cd LAB-AKB-T8
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