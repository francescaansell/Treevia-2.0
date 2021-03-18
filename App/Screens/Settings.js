import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

export default function App ({Navigation}) {
    return (
      <SafeAreaView style = {styles.container}>
          <Text>Settings!</Text>
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
