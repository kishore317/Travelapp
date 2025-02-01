import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: true }} />
      <Stack.Screen name="explore" options={{ headerShown: false }} />
    </Stack>
  );
}
