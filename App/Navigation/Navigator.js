import * as React from 'react';
import {
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Settings from '../Screens/Settings';
import Listings from '../Screens/Listings';
import Details from '../Screens/Details'
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator(); 

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          
          name="Plants"
          component={HomeStacks}
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
function HomeStacks () {
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
