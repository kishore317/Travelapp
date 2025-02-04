import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect,useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

export default function tripdetailsScreen() {
    const router = useRouter();
    const { name, destination, date, latitude, longitude } = useLocalSearchParams();

    useEffect(() => {
        console.log("Received latitude:", latitude, "Received longitude:", longitude);
    }, [latitude, longitude]);

    // Parse latitude and longitude to ensure they are numbers
    const lat = parseFloat(latitude) || 12.9716;  // Default to Bangalore if invalid
    const lon = parseFloat(longitude) || 77.5946;  // Default to Bangalore if invalid
    const [mapReady, setMapReady] = useState(false);

useEffect(() => {
    setMapReady(true);
}, [lat, lon]);

if (!mapReady) return null;

    console.log("Parsed latitude:", lat, "Parsed longitude:", lon);  // Check if parsing is correct
    console.log("Rendering map with lat:", lat, "lon:", lon);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{name}</Text>
                <Text>{destination}</Text>
                <Text>{date}</Text>
            </View>
            <MapView
            
                        
                style={styles.map}
                region={{


                    latitude: lat,
                    longitude: lon,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={{ latitude: lat, longitude: lon }}
                    title={name}
                    description="Trip Destination"

                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    map: {
        width: '100%',
        height: 300,
        marginTop: 20,
        borderRadius: 10,
        elevation: 3,
    },
    card: {
        backgroundColor: "#fff",
        padding: 25,
        marginVertical: 38,
        borderRadius: 10,
        elevation: 3,
    },
});
