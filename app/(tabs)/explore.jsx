import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { trips } from '@/constants/trips';

const Item = ({ id, name, destination, date,latitude,longitude }) => {
  const router = useRouter(); // Use useRouter() instead of useNavigation()

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/tripscreen/tripdetailsScreen",
          params: { id, name, destination, date,latitude,longitude },
        })
      }
    >
      <View style={styles.tripItem}>
        <Text style={styles.tripName}>{name}</Text>
        <Text style={styles.tripDestination}>{destination} - {date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Explore = () => {
  const router = useRouter(); // Use router from expo-router

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trip List</Text>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item id={item.id} name={item.name} destination={item.destination} date={item.date} />
        )}
      />
      <TouchableOpacity onPress={() => router.push('/tripscreen/tripScreen')}>
        <Text style={styles.roundedButton}>Add your Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
    backgroundColor:'#f5f5f5',
  },
  header:{
    fontSize:20,
    fontWeight:'bold',
    testAlign:'center',
    marginBottom:10,
  },
  tripItem:{
    padding:16,
    marginBottom:10,
    borderRadius:8,
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowOffset:{width:0,height:2},
    shadowRadius:4,
    elevation:3,
    borderWidth: 1,
    borderColor: '#cccccc'
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
  roundedButton: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 85,
    borderRadius: 25,
    marginBottom: 50,
    alignItems: 'center',
    textAlign:'center',
  },
});

export default Explore;
