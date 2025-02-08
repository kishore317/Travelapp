import { Stack,Tabs } from "expo-router";
import { createContext, useState } from "react";
import { trips } from '../../constants/trips';
import { AuthContext, AuthProvider } from "../login/AuthContext";







export const TripContext = createContext();

export default function Layout() {
  const [trips, setTrips] = useState(tripData);

  const addTrip = (trip) => {
    setTrips((prevTrips) => [...prevTrips, { id: Date.now().toString(), ...trip }]);
  };
  return (
    <AuthProvider>
   <TripContext.Provider value={{ trips, addTrip }}>
      <Tabs>
        <Tabs.Screen name="explore" options={{ title: "Explore (Trips)" }} />
        <Tabs.Screen name="tripScreen" options={{ title: "Add Trip" }} />
        </Tabs>
        </TripContext.Provider>
        </AuthProvider>
      
  );
}
