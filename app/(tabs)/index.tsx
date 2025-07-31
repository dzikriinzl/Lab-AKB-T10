import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TabHome() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#f0f4fb",
        padding: 20,
      }}
    >
      {/* Header */}
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#002B5B",
            textAlign: "center",
            fontFamily: "serif",
          }}
        >
          Universitas Muhammadiyah Makassar
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#0056A5",
            marginTop: 4,
            fontStyle: "italic",
            fontFamily: "sans-serif-light",
          }}
        >
          Integrated Green Islamic Futuristic
        </Text>
      </View>

      {/* Gambar dari URL */}
      <Image
        source={{
          uri: "https://news.unismuh.ac.id/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-28-at-1.52.35-PM.jpeg",
        }}
        style={{
          width: "100%",
          height: 1000,
          borderRadius: 12,
          marginBottom: 20,
        }}
        resizeMode="cover"
      />

      {/* Info Singkat */}
      <View
        style={{
          backgroundColor: "#ffffff",
          padding: 16,
          borderRadius: 10,
          marginBottom: 20,
          elevation: 3,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#333",
            lineHeight: 24,
            textAlign: "justify",
            fontFamily: "sans-serif",
          }}
        >
          Universitas Muhammadiyah Makassar didirikan pada tanggal 19 Juni 1963
          sebagai cabang dari Universitas Muhammadiyah Jakarta. Pendirian
          Perguruan Tinggi ini adalah realisasi dari hasil Musyawarah Wilayah
          Muhammadiyah Sulawesi Selatan dan Tenggara ke-21 di Kabupaten
          Bantaeng. Pendirian tersebut didukung oleh Persyarikatan Muhammadiyah
          sebagai organisasi yang bergerak dibidang pendidikan dan pengajaran
          dakwah amar ma&rsquo;ruf nahi munkar, lewat surat nomor : E-6/098/1963
          tertanggal 22 Jumadil Akhir 1394 H/12 Juli 1963 M. Kemudian akte
          pendiriannya dibuat oleh notaries R. Sinojo Wongsowidjojo berdasarkan
          akta notaries Nomor : 71 tanggal 19 Juni 1963. Universitas
          Muhammadiyah Makassar dinyatakan sebagai Perguruan Tinggi Swasta
          terdaftar sejak 1 Oktober 1965. Universitas Muhammadiyah Makassar
          (Unismuh Makassar) sebagai Perguruan Tinggi Muhammadiyah (PTM)
          mengemban tugas dan peran yang sangat besar bagi agama, bangsa dan
          negara, baik di masa sekarang maupun di masa depan. Selain posisinya
          sebagai salah satu PTM/PTS di Kawasan Timur Indonesia yang tergolong
          besar, juga padanya tertanam kultur pendidikan yang diwariskan sebagai
          amal usaha Muhammadiyah. Nama Muhammadiyah yang terintegrasi dengan
          nama makassar memberikan harapan terpadunya budaya, keilmuan dan nafas
          keagamaan. Pada awal berdirinya, Universitas Muhammadiyah Makassar
          membina dua fakultas yakni fakultas keguruan dan seni jurusan bahasa
          Indonesia, dan fakultas keguruan dan ilmu pendidikan jurusan
          pendidikan umum (PU), dan pendidikan sosial (PS) yang dipimpin oleh
          rektor Dr. H. Sudan. Pada tahun yang sama (1963) Universitas
          Muhammadiyah Makassar telah berdiri sendiri dan dipimpin oleh rektor
          Drs. H. Abdul Watif Masri. Perkembangan berikutnya Universitas
          Muhammadiyah Makassar pada tahun 1965 membuka fakultas baru yaitu:
          fakultas ilmu agama dan dakwah (FIAD), fakultas ekonomi (Fekon),
          fakultas sosial politik, fakultas kesejahteraan sosial, dan akademi
          pertanian. Selanjutnya tahun 1987 membuka fakultas teknik, tahun 1994
          fakultas pertanian, tahun 2002 membuka program pascasarjana, dan tahun
          2008 membuka fakultas kedokteran, dan sampai saat ini, Universitas
          Muhammadiyah Makassar telah memiliki 7 Fakultas 34 Program Studi dan
          Program Pascasarjana yang telah terkareditasi BAN-PT. Universitas
          Muhammadiyah Makassar pada Tahun 2003 mengalami tahapan transisi
          sejarah perkembangan, berupa perubahan formasi kepemimpinan dengan
          bergabungnya generasi muda dan generasi tua. Pimpinan dan seluruh
          civitas akademika Universitas Muhammadiyah Makassar bertekad untuk
          memelihara hasil capaian para pendahulu dan mengembangkannya kepada
          capaian yang lebih baik, serta berkomitmen: (1) memelihara kepercayaan
          masyarakat, (2) mencapai keunggulan dalam kompetisi yang semakin
          ketat, dan (3) mewujudkan kemandirian dalam pengelolaan dan
          pengembangan diri. Dari ke tiga komitmen tersebut diharapkan dapat
          mengantar Universitas Muhammadiyah Makassar untuk menjadi Perguruan
          Tinggi Islam Terkemuka
        </Text>
      </View>

      {/* Ikon Navigasi */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        {/* Fakultas */}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://fai.unismuh.ac.id/")}
          style={{ alignItems: "center", flex: 1 }}
        >
          <AntDesign name="book" size={30} color="#0056A5" />
          <Text
            style={{
              color: "#002B5B",
              marginTop: 6,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Fakultas
          </Text>
        </TouchableOpacity>

        {/* Program */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.unismuh.ac.id/program-studi/")
          }
          style={{ alignItems: "center", flex: 1 }}
        >
          <FontAwesome5 name="university" size={30} color="#0056A5" />
          <Text
            style={{
              color: "#002B5B",
              marginTop: 6,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Prodi
          </Text>
        </TouchableOpacity>

        {/* Website */}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://simak.unismuh.ac.id/")}
          style={{ alignItems: "center", flex: 1 }}
        >
          <MaterialCommunityIcons name="web" size={30} color="#0056A5" />
          <Text
            style={{
              color: "#002B5B",
              marginTop: 6,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Simakad
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tombol CTA Kunjungan */}
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.unismuh.ac.id")}
        style={{
          backgroundColor: "#0056A5",
          padding: 14,
          borderRadius: 8,
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Kunjungi Situs Resmi
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
