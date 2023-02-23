/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const LoginPage = () => {
  return (
    <>
      <Image
        source={require('../img/redbackground.jpg')}
        style={styles.background}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.icon}>
          <Icon name="heart" size={50} color="#FF3530" />
        </View>
        <View
          style={{
            flex: 2,
          }}>
          <Text style={styles.label}>USERNAME</Text>
          <Text style={styles.email}>saloni.bhatia@tothenew.com</Text>
          <Text style={styles.password}>PASSWORD</Text>
          <Text style={styles.email}>************</Text>
          <Text style={styles.forgot}>Forgot Password?</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={{color: '#FF3530', fontSize: 15, fontWeight: 'bold'}}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <View style={styles.options}>
            <Text
              style={{
                fontSize: 12,
                color: '#555',
                marginBottom: 20,
              }}>
              ----------------------
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#555',
                marginBottom: 20,
              }}>
              OR CONNECT WITH
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#555',
                marginBottom: 20,
              }}>
              ----------------------
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.facebookbtn}>
              <Icon
                name="facebook-square"
                size={15}
                color="#FFFFFF"
                alignItems="flex-start"
              />
              <Text style={styles.text}>facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googlebtn}>
              <Icon
                name="googleplus"
                size={15}
                color="#FFFFFF"
                alignItems="flex-start"
              />
              <Text style={styles.text}>Google</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#FFFFFF',
  },
  icon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  label: {
    marginTop: 60,
    width: 100,
    height: 30,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
  email: {
    width: 300,
    height: 30,
    color: '#778899',
    borderBottomWidth: 1,
    borderBottomColor: '#FF3530',
    marginBottom: 10,
  },
  password: {
    width: 100,
    height: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  forgot: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF3530',
    marginBottom: 20,
    textAlign: 'right',
  },
  loginButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 2,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  facebookbtn: {
    flexDirection: 'row',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#4169E1',
  },
  text: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 5,
    fontWeight: 'bold',
    alignItems: 'flex-end',
  },
  googlebtn: {
    flexDirection: 'row',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FF3530',
  },
});

export default LoginPage;
