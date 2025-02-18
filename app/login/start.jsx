import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { authContext } from "./AuthContext";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const { user, start } = useContext(authentication);
  const router = useRouter();

  const handleLogout = async () => {
    await start();
    router.replace("/(tabs)/explore"); // Redirect to explore page
  };

  return (
    <View>
      <Button title="Start Travelling" onPress={handleLogout} />
    </View>
  );
}
