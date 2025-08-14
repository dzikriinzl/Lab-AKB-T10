import { Image, Linking, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  const handleOpenMap = () => {
    Linking.openURL('https://maps.app.goo.gl/mf6GvJBvSPoPzhB58');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Unismuh Makassar</Text>
      <Image
        source={require('../../assets/images/unismuh.png')}
      />
      <Text style={styles.subtitle}>
      </Text>
      <Text style={styles.subtitle}>
        Universitas Muhammadiyah Makassar, Unismuh Makassar, adalah salah satu perguruan tinggi Muhammadiyah yang merupakan amal usaha Muhammadiyah dalam mengembangkan pendidikan khususnya pada jenjang pendidikan tinggi.
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.boldText}>Alamat:</Text> Jl. Sultan Alauddin No.259, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.boldText}>Rektor:</Text> Dr. Ir. H. Abd. Rakhim Nanda, MT, IPU
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.boldText}>Akreditasi:</Text> UNGGUL
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.boldText}>Pendaftaran:</Text> 26.860 (2014)
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.boldText}>Didirikan:</Text> 19 Juni 1963
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.boldText}>Provinsi:</Text> Sulawesi Selatan
      </Text>
      <Text style={styles.linkText} onPress={handleOpenMap}>
        Lihat Lokasi di Google Maps
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Manrope-Bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
    fontFamily: 'Urbanist',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Urbanist',
  },
  boldText: {
    fontWeight: 'bold',
    fontFamily: 'Manrope-Bold',
  },
  linkText: {
    fontSize: 14,
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontFamily: 'Urbanist',
  },
});