import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { students } from "../data/students";

  export default function StudentDetail() {
    const { id } = useLocalSearchParams();
    const student = students.find((s) => s.id === id);

    if (!student) {
      return (
        <View style={styles.center}>
          <Text style={styles.error}>❌ Mahasiswa tidak ditemukan</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {/* Tombol Kembali */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
          <Text style={styles.backText}>Kembali</Text>
        </TouchableOpacity>

        {/* Card Full */}
        <View style={styles.card}>
          {/* Foto di kiri besar */}
          <Image source={{ uri: student.photo }} style={styles.photo} />

          {/* Data di kanan besar */}
          <View style={styles.info}>
            <Text style={styles.label}>Nama</Text>
            <Text style={styles.value}>{student.name}</Text>

            <Text style={styles.label}>NIM</Text>
            <Text style={styles.value}>{student.nim}</Text>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#E6F0F6", padding: 20 },
    backButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#2563EB",
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 10,
      marginBottom: 16,
      alignSelf: 'flex-start',
    },
    backText: { 
      color: "#fff", 
      fontSize: 16, 
      marginLeft: 8 
    },
    card: {
      flex: 1,
      flexDirection: "column", // Mengubah menjadi kolom
      backgroundColor: "#FFFFFF",
      borderRadius: 16,
      padding: 20,
      shadowColor: "#000",
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
      alignItems: "center",
      justifyContent: 'center',
    },
    photo: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 5,
      borderColor: "#2563EB",
      marginBottom: 20,
      resizeMode: "cover",
    },
    info: {
      alignItems: "center",
      width: '100%',
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#6c757d", // Warna abu-abu yang lebih lembut
      marginBottom: 4,
      textTransform: "uppercase",
    },
    value: {
      fontSize: 22,
      color: "#343a40", // Warna teks yang lebih gelap
      fontWeight: "700",
      marginBottom: 20,
      textAlign: 'center',
    },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    error: { fontSize: 18, fontWeight: "bold", color: "red" },
  });