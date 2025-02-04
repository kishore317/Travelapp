import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const tripScreen = () => {
    const router=useRouter();
  return (
    <View>
      <Text style={styles.header}>TripScreen</Text>

      <View style={styles.container}>
        <TextInput placeholder='TripName' style={styles.textInput}/>
        <TextInput placeholder='Destination' style={styles.textInput}/>
        <TextInput placeholder='Date' style={styles.textInput}/>
        <TouchableOpacity onPress={()=>router.push('/(tabs)/explore')} >
            <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default tripScreen

const styles = StyleSheet.create({
  header:{
    marginTop:190,
    fontSize:16,
    textAlign:'center',
    fontWeight:'bold',
  },
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal:16,
    marginVertical:8,
    backgroundColor:'fff',
  },
  textInput:{
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  save:{
    marginTop: 20,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    textAlign:'center',
  }
})