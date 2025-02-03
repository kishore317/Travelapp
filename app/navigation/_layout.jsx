import { Stack } from "expo-router";
import { createContext, useState } from "react";
import { Slot } from "expo-router";
import {trips} from '@/constants/trips';

export const TripContext = createContext();

export default function Layout() {
  const [trips, setTrips] = useState(tripData);

  const addTrip = (trip) => {
    setTrips((prevTrips) => [...prevTrips, { id: Date.now().toString(), ...trip }]);
  };
  return (
    <TripContext.Provider value={{ trips, addTrip }}>
      <Tabs>
        <Tabs.Screen name="explore" options={{ title: "Explore (Trips)" }} />
        <Tabs.Screen name="tripScreen" options={{ title: "Add Trip" }} />
    <Stack>
      {/* Tabs should handle Profile and Explore internally */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Separate authentication and trip screens */}
      <Stack.Screen name="login/signIn" options={{ headerShown: false }} />
      <Stack.Screen name="login/signUp" options={{ headerShown: false }} />
      <Stack.Screen name="tripscreen/tripScreen" options={{ headerShown: false }} />
    </Stack>
    </Tabs>
    </TripContext.Provider>
  );
}
//trips is stored in context so all screens share the same data.
//addTrip updates the trip list dynamically.