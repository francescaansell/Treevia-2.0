import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Checkbox from 'expo-checkbox';
//https://docs.expo.io/versions/latest/sdk/checkbox/
import Logo from '../Components/Logo'
import { useState } from 'react';
import Picker from '@react-native-picker/picker'

export default function App ({Navigation}) {
    const [flowerColor, setFlowerColor] = useState('');
    const [fruitColor, setFruitColor] = useState('');
    const [isVegChecked, setVegChecked] = useState(false);
    const [isEdibleChecked, setEdibleChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");

    return (
      <SafeAreaView style = {styles.container}>
        <Logo />
        <View style= {styles.section}>   
          <Checkbox 
              value={isVegChecked} 
              onValueChange={setVegChecked} 
              color={isVegChecked ? 'green' : undefined}
            />
            <Text style= {styles.textStyle}> Vegtable </Text>
          </View>

          <View style={styles.section}>
            <Checkbox 
              value={isEdibleChecked} 
              onValueChange={setEdibleChecked} 
              color={isEdibleChecked ? 'green' : undefined}
            />
            <Text style= {styles.textStyle}> Edible </Text>
          </View>

          <View style= {styles.section}></View>
          <Text>Flower Color</Text>
          <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      </SafeAreaView>

    );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        },
        textStyle: {
          fontSize: 30,
          padding: 20, 
        },
        
        section: {
          marginBottom: 200, 
          flexDirection: 'row',
          alignItems: 'center',
        },
        
        checkbox: {
          margin: 8,
        },
      });
    
