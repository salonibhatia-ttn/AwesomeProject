/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Dashboard = ({navigation, route}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#000000',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Welcome Saloni
      </Text>

      <TouchableOpacity
        style={{
          marginTop: 10,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#4169E1', fontSize: 20, fontWeight: 'bold'}}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
