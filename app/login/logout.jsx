import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { authContext } from "./AuthContext";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const { user, logout } = useContext(authentication);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/index"); // Redirect to login page after logout
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
