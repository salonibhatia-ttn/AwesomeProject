/* eslint-disable react/react-in-jsx-scope */
// import React, {useEffect} from 'react';
import HomePage from './HomePage';
import Settings from './Settings';
import Dashboard from './Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from './Tabs';
const Drawer = createDrawerNavigator();

const ProfilePage = () => {
  // const goBackToHome = () => {
  //   navigation.navigate('Home');
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     goBackToHome();
  //   }, 5000);
  // });
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
};

export default ProfilePage;
