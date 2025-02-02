import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
const trips =[
  { id: '1', name: 'Goa Getaway', destination: 'Goa', date: '2025-03-15' },
  { id: '2', name: 'Himalayan Trek', destination: 'Manali', date: '2025-04-10' },
  { id: '3', name: 'Beach Vacation', destination: 'Kerala', date: '2025-05-22' },
  { id: '4', name: 'Desert Safari', destination: 'Rajasthan', date: '2025-06-12' },
  { id: '5', name: 'City Lights Tour', destination: 'Mumbai', date: '2025-07-05' },
  { id: '6', name: 'Temple Trail', destination: 'Varanasi', date: '2025-08-18' },
  { id: '7', name: 'Snowy Escape', destination: 'Shimla', date: '2025-09-30' },
  { id: '8', name: 'Cultural Exploration', destination: 'Kolkata', date: '2025-10-12' },
  { id: '9', name: 'Backwaters Retreat', destination: 'Alleppey', date: '2025-11-20' },
  { id: '10', name: 'Adventure Trip', destination: 'Rishikesh', date: '2025-12-05' },
  { id: '11', name: 'Wildlife Safari', destination: 'Jim Corbett', date: '2026-01-15' },
  { id: '12', name: 'Tea Garden Tour', destination: 'Darjeeling', date: '2026-02-10' },
  { id: '13', name: 'Spiritual Journey', destination: 'Haridwar', date: '2026-03-22' },
  { id: '14', name: 'Island Paradise', destination: 'Andaman', date: '2026-04-07' },
  { id: '15', name: 'Lakeside Retreat', destination: 'Udaipur', date: '2026-05-18' },
];
const Item = ({name,destination,date}) =>{
  return(
    <View>
      <Text>{name}</Text>
      <text>{destination}-{date}</text>
    </View>
  );
};
const Explore = () => {
  const router=useRouter();
  return (
    <View style={styles.container}>
      <Text>Trip List</Text>
      <FlatList
      data={trips}
      keyExtractor={(item) => item.id}
      renderItem={({item})=><Item name={item.name} destination={item.destination}  date = {item.date}/>}
      />
      <TouchableOpacity onPress={()=>router.push('/tripscreen/tripScreen')}>
        <Text>Add your Trip</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Explore;
