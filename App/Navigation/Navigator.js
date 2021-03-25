import * as React from 'react';
import {
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Settings from '../Screens/Settings';
import Listings from '../Screens/Listings';
import Details from '../Screens/Details'
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator(); 

export default function Navigator() {
  const dark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#015824',
    },
  };

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: '#F6F6F6',
      card: '#4f8f00',
      text: '291f1e',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Listings") {
            iconName = focused ? 'leaf' : 'leaf-outline';
          } else if (route.name === "Settings") {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}

      tabBarOptions={{
        labelStyle: { fontSize: 20 },
        activeTintColor: '#4F8F00',
        inactiveTintColor: 'grey',
      
      }}
      >
        <Tab.Screen
          
          name="Listings"
          component={ListingsStacks}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
function ListingsStacks () {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Listings} />
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Zapfino',
    textAlign: 'center',
  },
});
