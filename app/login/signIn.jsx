import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, Pressable,StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AuthContext } from "../login/AuthContext";

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async () => {
    await login(username, password);
    router.replace('/(tabs)/profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        placeholder="Username"
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Submit" onPress={handleLogin} />
      <View style={styles.row}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => router.push('/login/signUp')}>
          <Text>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
}



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