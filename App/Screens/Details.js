import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import Logo from '../Components/Logo'

export default function App ({navigation}) {
    return (
      <SafeAreaView style = {styles.container}>
          <Logo />
          <Text>Details</Text>
          
      </SafeAreaView>
        
      
    );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }
      });