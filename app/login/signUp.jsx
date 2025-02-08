import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function  Signup() {
  const router = useRouter();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = () => {
    alert("Account created successfully");
    router.replace("/login/signIn");
  };
  return (
    <View style={styles.container}>
      <Text>Create your account</Text>
      <TextInput placeholder="Name"   onChangeText={setName} style={styles.textInput} />
      <TextInput placeholder="Email"   onChangeText={setEmail} style={styles.textInput} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.textInput} />
      <Button title="Submit"  onPress={handleSignup}/>
      <View style={styles.row}>
        <Text style={styles.input}>Already have an account? </Text>
        <Pressable onPress={() => router.push('/login/signIn')}>
          <Text style={styles.pressableText}>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB', // Light background
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
  input: {
    fontSize: 14,
    color: '#555',
  },
  pressableText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
