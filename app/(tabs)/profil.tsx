import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/Dzikri.jpeg')}
        style={styles.profileImage}
      />
      <Text style={styles.title}>Data Diri Pribadi</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <Text style={styles.value}>Muh. Dzikri Alfauzan Nuzul</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>NIM</Text>
        <Text style={styles.value}>105841113022</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Kelas</Text>
        <Text style={styles.value}>IF-6D</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Jurusan</Text>
        <Text style={styles.value}>Informatika</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Fakultas</Text>
        <Text style={styles.value}>Fakultas Teknik</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Lora-Bold',
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    fontFamily: 'MerriweatherSans-SemiBoldItalic',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'PlayfairDisplay-Regular',
  },
});