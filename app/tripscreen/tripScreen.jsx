import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { trips } from "../../constants/trips";


const TripScreen = () => {
  const router = useRouter();

  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSave = () => {
    if (tripName && destination && date) {
      const newTrip = { id: trips.length + 1, name: tripName, destination, date }; // Generate new ID
      trips.push(newTrip); // Directly modify the trips array
      router.back(); // Navigate back to explore screen
    }
  };

  return (
    <View style={styles.overall}>
      <Text style={styles.header}>TripScreen</Text>

      <View style={styles.container}>
        <TextInput placeholder="Trip Name" value={tripName} onChangeText={setTripName} style={styles.textInput} />
        <TextInput placeholder="Destination" value={destination} onChangeText={setDestination} style={styles.textInput} />
        <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.textInput} />
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TripScreen;

const styles = StyleSheet.create({
  overall: {
    flex: 1, // Ensures the background color covers the full screen
    backgroundColor: '#005A9C',
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  container: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds shadow for Android
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  saveButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
