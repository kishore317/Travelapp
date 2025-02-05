import { StyleSheet, Text, View ,TextInput,Button,Pressable} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { preventAutoHideAsync } from 'expo-router/build/utils/splash';

const Signup = () => {
  const router=useRouter();
  return (
    <View style={styles.container} >
      <Text>LogIn</Text>
    <TextInput placeholder='Email' style={styles.textInput} />
    <TextInput placeholder='Password'secureTextEntry={true} style={styles.textInput} />
    <Button title='Submit' onPress={()=> router.push('/(tabs)/profile')} />
    <View style={styles.row}>
      <Text style={styles.input}>Don't have an account</Text>
      <Pressable  onPress={()=>router.push('/login/signUp')} >
        <Text style={styles.pressableText}>Create Account</Text>
        </Pressable>
        </View>
    </View>
  );
};

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEEB',
        padding: 20,
      },
      textInput: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
      },
      row:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
      },
      input: {
        fontSize: 14,
        color: '#555',
      },
      pressableText: {
        color: '#007bff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});