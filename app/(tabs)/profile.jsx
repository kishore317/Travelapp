import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "expo-router";



const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>John Doe</Text>
      <Text style={styles.text}>john.doe@example.com</Text>
      <TouchableOpacity onPress={() => navigation.navigate("explore")} style={styles.logoutButton}>
  <Text style={styles.logoutText}>Start Travelling</Text>
  <TouchableOpacity onPress={() => navigation.navigate("index")} style={styles.logoutButton}>
  <Text style={styles.logoutText}>LogOut</Text>
</TouchableOpacity>

</TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  title: { fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10 },
  text: { fontSize: 16,
    marginBottom: 5 },
  logoutButton: { marginTop: 20,
    padding: 10, backgroundColor: "red",
    borderRadius: 5 },
  logoutText: { color: "white",
    fontWeight: "bold" },
});

export default ProfileScreen;
