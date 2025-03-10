import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { trips } from '../../constants/trips';
import { useState,useEffect } from 'react';


const Item = ({ id, name, destination, date,latitude,longitude }) => {
  const router = useRouter(); // Use useRouter() instead of useNavigation()

  return (
    <View style={styles.card}>
  <TouchableOpacity
    onPress={() => {
      router.push({
        pathname: "/tripscreen/tripdetailsScreen",
        params: { id, name, destination, date, latitude, longitude },
      });
    }}
  >
      <View style={styles.row}>
      <View style={styles.tripItem}>
        <Text style={styles.tripName}>{name}</Text>
        <Text style={styles.tripDestination}>{destination} - {date}</Text>
        </View>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const Explore = () => {
  const [tripList , setTripList] = useState([...trips]);
  const router = useRouter(); // Use router from expo-router

  //refresh the trip list when returning to the screen
  useEffect(() => {
    setTripList([...trips]);
  }, [trips.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trip List</Text>
      
      <FlatList
        data={trips}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
        renderItem={({ item }) => (
          <Item id={item.id}
          name={item.name}
          destination={item.destination}
          date={item.date}
          latitude={item.latitude}
          longitude={item.longitude}
          showsVerticalScrollIndicator={false} />
        )}
      />
      <TouchableOpacity onPress={() => router.push('/tripscreen/tripScreen')}>
        <View>
        <Text style={[styles.floatingButton,styles.buttontext,styles.textcenter,styles.textsize]}>Add your Trip</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
    backgroundColor:'#E0F7FA',
  },
  header:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10,
  },
  tripName:{
    fontSize:18,
    fontWeight:'bold',
    color:'#333',
  },
  tripDetails:{
    fontSize:14,
    color:'#666',
    marginTop:4,
  },
  floatingButton: {
    flex: 1,
    backgroundColor: "#005A9C",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 40,
    borderRadius: 10,
    position: "absolute",
    bottom: 40,
    right: 30,
    },
    card: {
      backgroundColor: "#fff",
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      elevation: 3,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
});

export default Explore;
