import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // import icon

export default function TabProfil() {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#000080",
          marginBottom: 20,
          borderBottomWidth: 2,
          borderColor: "#000080",
          paddingBottom: 10,
        }}
      >
        BIODATA DIRI
      </Text>

      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 5,
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        {/* Bagian Kiri dan Tengah */}
        <View style={{ flex: 2 }}>
          {/* Baris Header */}
          <View style={{ flexDirection: "row", backgroundColor: "#0000cc" }}>
            <Text style={styles.headerCell}>DATA DIRI</Text>
            <Text style={styles.headerCell}>KETERANGAN</Text>
          </View>

          {/* Data Baris */}
          {[
            { label: "Nama", value: "Fauzan Azhari Rahman" },
            {
              label: "Tempat Tanggal Lahir",
              value: "Jakarta, 27 September 2004",
            },
            { label: "Jenis Kelamin", value: "Laki-Laki" },
            { label: "NIM", value: "105841109622" },
            { label: "Kelas", value: "6C" },
            { label: "Jurusan", value: "Informatika" },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                borderTopWidth: 1,
                borderColor: "#000",
              }}
            >
              <Text style={styles.cell}>{item.label}</Text>
              <Text style={styles.cell}>{item.value}</Text>
            </View>
          ))}

          {/* Tombol Icon Sosmed */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              onPress={() => openLink("https://fauzanazhari.vercel.app/")}
              style={{ alignItems: "center", marginHorizontal: 10 }}
            >
              <Icon name="globe" size={30} color="#000080" />
              <Text style={{ color: "#000080", marginTop: 5 }}>Website</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openLink("http://instagram.com/fauzan_azhri.zip")}
              style={{ alignItems: "center", marginHorizontal: 10 }}
            >
              <Icon name="instagram" size={30} color="#C13584" />
              <Text style={{ color: "#C13584", marginTop: 5 }}>Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openLink("https://wa.me/+6285245460805")}
              style={{ alignItems: "center", marginHorizontal: 10 }}
            >
              <Icon name="whatsapp" size={30} color="#25D366" />
              <Text style={{ color: "#25D366", marginTop: 5 }}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Foto */}
        <View
          style={{
            flex: 1,
            borderLeftWidth: 1,
            borderColor: "#000",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#e6f0ff",
          }}
        >
          <Image
            source={require("../../assets/images/farhan.jpg")}
            style={{
              width: 190,
              height: 270,
              resizeMode: "cover",
              borderWidth: 1,
              borderColor: "#000",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  headerCell: {
    flex: 1,
    padding: 10,
    color: "white",
    fontWeight: "bold",
    borderRightWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
  },
  cell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderColor: "#000",
    textAlign: "left",
  },
};
