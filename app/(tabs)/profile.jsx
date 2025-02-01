import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button title="Login" onPress={() => console.log('Login pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    justifyContent: 'center',
    marginTop: 150,
    padding: 20,
    marginHorizontal: 50,
    marginVertical: 50,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default Profile;
