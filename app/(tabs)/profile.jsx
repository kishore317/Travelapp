import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const ProfileScreen = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.text}>Traveller</Text>
        <Text style={styles.text}>Traveller23@example.com</Text>

        <TouchableOpacity
          onPress={() => router.push("/(tabs)/explore")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Travelling</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/(tabs)");
            handleLogout();
          }}
          style={styles.logoutButton}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
    backgroundColor:"#87CEEB",
  },
  card: {
    backgroundColor: "#F5DEB3",
    padding: 20,
    width: "90%",
    borderRadius: 10,
    elevation: 3,
    alignItems: "center", // Aligns text inside card to center
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    padding: 10,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  logoutButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
