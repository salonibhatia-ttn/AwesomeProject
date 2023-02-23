/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HomePage = () => {
  return (
    <>
      <Image
        source={require('../img/redbackground.jpg')}
        style={styles.background}
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <Icon name="heart" size={50} color="white" />
          <Text style={styles.title}>heartlink</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={{color: 'white', fontSize: 15}}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={{color: '#FF3530', fontSize: 15, fontWeight: 'bold'}}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 710,
    height: 710,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  signupButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  loginButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
  },
});

export default HomePage;
