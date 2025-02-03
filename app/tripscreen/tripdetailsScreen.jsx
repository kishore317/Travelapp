import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

export default function tripdetailsScreen(){
    const router = useRouter();
    const {name,destination,date,latitude,longitude} = useLocalSearchParams();
  return (
    <View style={styles.container}> 
        <Text style={styles.title}>{name}</Text>
        <Text>{destination}</Text>
        <Text>{date}</Text>


    <MapView style={styles.map}
    initialRegion={{
        latitude:parseFloat(latitude) || 12.9716,
        longitude:parseFloat(longitude) || 77.5946,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    }} >
        <Marker
        coordinate={{latitude:parseFloat(latitude),longitude:parseFloat(longitude)}}
        title={name}
        description="Trip Destination"/>
    </MapView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  map: { width: '100%', height: 300, marginTop: 20 },
});