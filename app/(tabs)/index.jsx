import { View, Text, StatusBar, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const images = require("../../assets/images/wallpaper.png"); // Import background image

const Index = () => {
  const router = useRouter();
  return (
    <ImageBackground source={images} style={styles.backgroundImage}>
      <TouchableOpacity style={styles.roundedButton} onPress={() => router.push('/login/signIn')}>
        <Text style={styles.buttonText}>Start Travelling</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  roundedButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 85,
    borderRadius: 25,
    marginBottom: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Index;
