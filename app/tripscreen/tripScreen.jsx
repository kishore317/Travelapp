import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const tripScreen = () => {
    const router=useRouter();
  return (
    <View>
      <Text>tripScreen</Text>

      <View>
        <TextInput placeholder='TripName'/>
        <TextInput placeholder='Destination'/>
        <TextInput placeholder='Date'/>
        <TouchableOpacity onPress={()=>router.push('/(tabs)/explore')} >
            <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default tripScreen

const styles = StyleSheet.create({})