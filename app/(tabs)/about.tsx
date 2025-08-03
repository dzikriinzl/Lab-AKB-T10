import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi Ini</Text>
      <Text style={styles.bodyText}>
        Aplikasi mobile ini dibuat sebagai bagian dari tugas LAB Aplikasi Komputasi Bergerak di Jurusan Informatika Unismuh Makassar. Tujuannya adalah untuk mendemonstrasikan penggunaan Expo Router dalam membangun aplikasi dengan navigasi tab bar sederhana.
      </Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Teknologi yang Digunakan</Text>
        <Image
          source={require('../../assets/images/react-native-and-expo-cover.jpg')}
        />
        <Text style={styles.sectionText}>
          -
        </Text>
        <Text style={styles.sectionText}>
          Aplikasi ini dibangun menggunakan <Text style={styles.boldText}>React Native</Text> dan <Text style={styles.boldText}>Expo</Text>. React Native memungkinkan pengembangan aplikasi lintas platform, sementara Expo menyederhanakan alur kerja dengan menyediakan berbagai alat dan layanan.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Navigasi dan Routing</Text>
        <Image
          source={require('../../assets/images/exporouter.png')}
        />
        <Text style={styles.sectionText}>
          Untuk navigasi antar halaman, kami menggunakan <Text style={styles.boldText}>Expo Router</Text>. Teknologi ini menyediakan sistem file-based routing yang intuitif, yang memungkinkan kami membuat tab bar di bagian bawah layar dengan mudah.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Fungsi Setiap Halaman:</Text>
        <Text style={styles.bodyText}>
          • <Text style={styles.boldText}>Home:</Text> Menampilkan informasi dasar tentang Unismuh Makassar.
        </Text>
        <Text style={styles.bodyText}>
          • <Text style={styles.boldText}>About:</Text> Berisi penjelasan mengenai aplikasi dan teknologi yang digunakan.
        </Text>
        <Text style={styles.bodyText}>
          • <Text style={styles.boldText}>Profil:</Text> Menampilkan data diri pribadi.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Oswald-Regular',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Roboto-Black',
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'justify',
    fontFamily: 'Inter-Italic',
  },
  boldText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Black',
  },
  sectionContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  sectionText: {
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Inter-Italic',
  },
});