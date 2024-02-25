import { View, Text, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import MatchScreen from '../screens/MatchScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";

import { useDispatch } from 'react-redux';
import { visualiser } from '../redux/actions';


const Nav = createDrawerNavigator();

const Navigation = () => {

  const dispatch = useDispatch()

  return (
    <Nav.Navigator screenOptions={{headerTintColor : "white", headerStyle : {backgroundColor : "#2557a7"}}}>
      <Nav.Screen 
        name='MatchScreen'
        component={MatchScreen}
        options={{
          drawerIcon : ({focused, size, color}) => (
            <Icon name="home-sharp" size={size} color={color}/>
          ),
          headerRight : () => (
            <Pressable onPress={() => dispatch(visualiser())}>
              <Icon name='settings' color='white' size={22} style={{marginRight: 20}} />
            </Pressable>
          )
        }}
      />

    </Nav.Navigator>
  )
}

export default Navigation

