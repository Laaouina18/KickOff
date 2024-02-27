import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Player from '../components/PlayerDetail';
import MatchDetail from '../components/MatchDetail';
import PlayerDetail from '../components/PlayerDetail';
export default function MainStack() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
      <Stack.Screen options={() => ({
        headerStyle: {
          backgroundColor: 'purple',
        },

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      })}

        name="matchDetail" component={MatchDetail} />
      <Stack.Screen options={() => ({
       
        headerStyle: {
          backgroundColor: 'purple'
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
