import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Player from '../components/PlayerDetail';
import Match from '../components/MatchDetail';
import PlayerDetail from '../components/PlayerDetail';
export default function MainStack() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
      <Stack.Screen options={() => ({
        headerStyle: {
          backgroundColor: 'green',
        },

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      })}

        name="match" component={Match} />
      <Stack.Screen options={() => ({
       
        headerStyle: {
          backgroundColor: 'green'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        }
      }
      )} 
       name="playerDetail" component={PlayerDetail} />
    </Stack.Navigator>
  )
}
