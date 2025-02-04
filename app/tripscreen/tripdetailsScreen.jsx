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

      <View style = {styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Text>{destination}</Text>
        <Text>{date}</Text>
        </View>


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
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: 20,
    padding: 25,
    marginVertical: 38,
    marginHorizontal: 0,
    borderRadius: 10,
    elevation: 3,
    marginVertical: 38,
    marginHorizontal: 0,
    borderRadius: 10,
    elevation: 3,

  },
  card:{
    backgroundColor: "#fff",
      padding: 25,
      marginVertical: 38,
      marginHorizontal: 0,
      borderRadius: 10,
      elevation: 3,
  }
});