import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function AboutPage() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.card}>
        {/* Judul Halaman */}
        <Text style={styles.title}>Tentang Aplikasi Ini</Text>

        {/* Ilustrasi */}
        <Image
          source={{
            uri: "https://miro.medium.com/v2/resize:fit:600/1*fQJ4KqHQIxUH9SiAaLev9Q.png",
          }}
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Paragraf Pembuka */}
        <Text style={styles.paragraph}>
          Aplikasi ini dibangun menggunakan{" "}
          <Text style={styles.bold}>React Native</Text> dan{" "}
          <Text style={styles.bold}>Expo</Text>, dua teknologi andalan dalam
          pengembangan aplikasi mobile lintas platform. Tujuannya adalah sebagai
          sarana pembelajaran sekaligus implementasi praktis dalam dunia nyata.
        </Text>

        {/* React Native */}
        <View style={styles.sectionHeader}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
            }}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.sectionTitle}>Apa itu React Native?</Text>
        </View>
        <Text style={styles.paragraph}>
          React Native adalah framework open-source yang memungkinkan
          pengembangan aplikasi mobile untuk Android dan iOS hanya dengan satu
          basis kode JavaScript. Framework ini memungkinkan developer membuat
          aplikasi dengan UI native tanpa perlu menulis ulang kode untuk tiap
          platform.
        </Text>

        {/* Expo */}
        <View style={styles.sectionHeader}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
            }}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.sectionTitle}>Peran Expo dalam Aplikasi</Text>
        </View>
        <Text style={styles.paragraph}>
          Expo adalah toolchain dan layanan pendukung untuk React Native yang
          menyederhanakan proses pengembangan dan testing. Expo memudahkan kamu
          untuk menjalankan aplikasi secara instan di perangkat tanpa harus
          konfigurasi manual Android Studio maupun Xcode.
        </Text>

        {/* Fitur */}
        <View style={styles.sectionHeader}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
            }}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.sectionTitle}>Fitur Aplikasi</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Beranda</Text>: Informasi utama seputar
            universitas dan fitur aplikasi.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Tentang</Text>: Penjelasan teknologi,
            latar belakang, dan tujuan aplikasi.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Profil</Text>: Identitas pengembang dan
            data pribadi pembuat aplikasi.
          </Text>
        </View>

        {/* Kesimpulan */}
        <View style={styles.sectionHeader}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/148/148767.png",
            }}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.sectionTitle}>Kesimpulan</Text>
        </View>
        <Text style={styles.paragraph}>
          Melalui kombinasi React Native dan Expo, pengembangan aplikasi mobile
          menjadi jauh lebih efisien dan menyenangkan. Aplikasi ini menunjukkan
          bahwa pengembangan mobile tidak harus rumit, bahkan bisa dimulai hanya
          dengan browser, editor, dan semangat belajar.
        </Text>
      </View>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f5ff",
  },
  contentContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 40,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 8,
    maxWidth: 1100,
    width: "100%",
  },
  title: {
    fontSize: 36,
    fontFamily: "'Segoe UI', sans-serif",
    color: "#0a3d62",
    marginBottom: 24,
    textAlign: "center",
  },
  illustration: {
    width: windowWidth > 480 ? 450 : windowWidth - 40,
    height: 200,
    alignSelf: "center",
    marginBottom: 40,
  },
  paragraph: {
    fontSize: 18,
    color: "#333",
    lineHeight: 32,
    fontFamily: "'Open Sans', sans-serif",
    marginBottom: 30,
  },
  bold: {
    fontWeight: "bold",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#1d4ed8",
    fontFamily: "'Segoe UI', sans-serif",
  },
  list: {
    paddingLeft: 20,
  },
  listItem: {
    fontSize: 18,
    color: "#444",
    lineHeight: 32,
    fontFamily: "'Trebuchet MS', sans-serif",
    marginBottom: 10,
  },
});
