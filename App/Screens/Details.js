import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import Logo from '../Components/Logo'
import Metrics from '../Assets/Themes/Metrics'

export default function App ({route, navigation}) {
  const {myParam } = route.params;

    return (
      <SafeAreaView style = {styles.container}>
        <View style = {styles.logo}>
          <Logo />
        </View>
        
        <View style = {styles.info}>
            <View style = {styles.section} >
              <Image style={styles.plantPicture}
                source={{ uri: myParam.http_image_url }} />
            </View>
            
            <View style = {styles.section} >
              <Text style={styles.textStyle} > Common Name: {myParam.common_name}</Text>
            </View>
            <View style = {styles.section} >
              <Text style={styles.textStyle} > Scientific Name: {myParam.scientific_name}</Text>
            </View>
            <View style = {styles.section} >
              <Text style={styles.textStyle} > Family: {myParam.family}</Text>
            </View>
            <View style = {styles.section} >
              <Text style={styles.textStyle} > Genus: {myParam.genus}</Text>
            </View>
          </View>
          
      </SafeAreaView>
        
      
    );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',

        }, 
        textStyle: {
          fontSize: 20,
        },
        logo: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: Metrics.images.logo * .5, 
        },
        section: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: 40,
        }, 
        info: {
          margin: 20
        },
        plantPicture: {
          height: Metrics.images.large * 2,
          width: Metrics.images.large * 2,
          // borderRadius: Metrics.images.large * 0.5,
          borderWidth: 1,
        },
      });