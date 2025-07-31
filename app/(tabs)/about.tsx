import React from "react";

export default function AboutPage() {
  return (
    <div
      style={{
        backgroundColor: "#f0f5ff",
        padding: "50px 20px",
        overflowY: "auto",
        fontFamily: "Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "14px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        {/* Judul Halaman */}
        <h1
          style={{
            fontSize: "36px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#0a3d62",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Tentang Aplikasi Ini
        </h1>

        {/* Ilustrasi */}
        <img
          src="https://miro.medium.com/v2/resize:fit:600/1*fQJ4KqHQIxUH9SiAaLev9Q.png"
          alt="Mobile App Illustration"
          style={{
            width: "450px",
            margin: "0 auto 40px auto",
            display: "block",
          }}
        />

        {/* Paragraf Pembuka */}
        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: "1.8",
            fontFamily: "'Open Sans', sans-serif",
            marginBottom: "30px",
          }}
        >
          Aplikasi ini dibangun menggunakan <strong>React Native</strong> dan{" "}
          <strong>Expo</strong>, dua teknologi andalan dalam pengembangan
          aplikasi mobile lintas platform. Tujuannya adalah sebagai sarana
          pembelajaran sekaligus implementasi praktis dalam dunia nyata.
        </p>

        {/* React Native */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
            alt="React Icon"
            style={{ width: "40px", marginRight: "16px" }}
          />
          <h2
            style={{
              fontSize: "24px",
              color: "#1d4ed8",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            Apa itu React Native?
          </h2>
        </div>
        <p
          style={{
            fontSize: "17px",
            color: "#555",
            lineHeight: "1.7",
            fontFamily: "Georgia, serif",
          }}
        >
          React Native adalah framework open-source yang memungkinkan
          pengembangan aplikasi mobile untuk Android dan iOS hanya dengan satu
          basis kode JavaScript. Framework ini memungkinkan developer membuat
          aplikasi dengan UI native tanpa perlu menulis ulang kode untuk tiap
          platform.
        </p>

        {/* Expo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            alt="Expo Icon"
            style={{ width: "40px", marginRight: "16px" }}
          />
          <h2
            style={{
              fontSize: "24px",
              color: "#1d4ed8",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            Peran Expo dalam Aplikasi
          </h2>
        </div>
        <p
          style={{
            fontSize: "17px",
            color: "#555",
            lineHeight: "1.7",
            fontFamily: "Georgia, serif",
          }}
        >
          Expo adalah toolchain dan layanan pendukung untuk React Native yang
          menyederhanakan proses pengembangan dan testing. Expo memudahkan kamu
          untuk menjalankan aplikasi secara instan di perangkat tanpa harus
          konfigurasi manual Android Studio maupun Xcode.
        </p>

        {/* Fitur */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
            alt="Fitur Icon"
            style={{ width: "40px", marginRight: "16px" }}
          />
          <h2
            style={{
              fontSize: "24px",
              color: "#1d4ed8",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            Fitur Aplikasi
          </h2>
        </div>
        <ul
          style={{
            fontSize: "17px",
            color: "#444",
            lineHeight: "1.8",
            fontFamily: "'Trebuchet MS', sans-serif",
            paddingLeft: "25px",
          }}
        >
          <li>
            <strong>Beranda</strong>: Informasi utama seputar universitas dan
            fitur aplikasi.
          </li>
          <li>
            <strong>Tentang</strong>: Penjelasan teknologi, latar belakang, dan
            tujuan aplikasi.
          </li>
          <li>
            <strong>Profil</strong>: Identitas pengembang dan data pribadi
            pembuat aplikasi.
          </li>
        </ul>

        {/* Kesimpulan */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
            alt="Check Icon"
            style={{ width: "40px", marginRight: "16px" }}
          />
          <h2
            style={{
              fontSize: "24px",
              color: "#1d4ed8",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            Kesimpulan
          </h2>
        </div>
        <p
          style={{
            fontSize: "17px",
            color: "#555",
            lineHeight: "1.7",
            fontFamily: "Georgia, serif",
          }}
        >
          Melalui kombinasi React Native dan Expo, pengembangan aplikasi mobile
          menjadi jauh lebih efisien dan menyenangkan. Aplikasi ini menunjukkan
          bahwa pengembangan mobile tidak harus rumit, bahkan bisa dimulai hanya
          dengan browser, editor, dan semangat belajar.
        </p>
      </div>
    </div>
  );
}
