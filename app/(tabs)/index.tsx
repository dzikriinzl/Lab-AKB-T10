import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { students } from "../data/students";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Daftar Mahasiswa Informatika Angkatan 2022
      </Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Link href={`/student/${item.id}`} asChild>
            <TouchableOpacity style={styles.item} activeOpacity={0.85}>
              <Ionicons
                name="person-circle-outline"
                size={28}
                color="#25d4ebff"
                style={styles.icon}
              />
              <Text style={styles.name}>{item.name}</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#25ebdbff"
                style={{ marginLeft: "auto" }}
              />
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e718aff", // Biru navy
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderLeftWidth: 6,
    borderLeftColor: "#25e5ebff", // Biru terang
  },
  icon: { marginRight: 10 },
  name: { fontSize: 16, fontWeight: "600", color: "#000000ff" },
});
