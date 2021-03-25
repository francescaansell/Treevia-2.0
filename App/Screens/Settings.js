import * as React from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Checkbox from 'expo-checkbox';
//https://docs.expo.io/versions/latest/sdk/checkbox/
import Logo from '../Components/Logo'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App ({Navigation}) {
    const [flowerColor, setFlowerColor] = useState();
    const [fruitColor, setFruitColor] = useState();
    const [isVegChecked, setVegChecked] = useState(false);
    const [isEdibleChecked, setEdibleChecked] = useState(false);

    //Persistent Storage Flower Color
    const setFlowerColorFromStorage = (flowerColor_string) => {
      setFlowerColor(JSON.parse(flowerColor_string));
      console.log("Set flower Color from Storage");
    }

    const storeFlowerColor = async (newValue) => {
      try {
        await AsyncStorage.setItem('flowerColor', JSON.stringify(newValue))
      } catch (e) {
        console.error(e)
      }
    };

    const readFlowerColor = async () => {
      try {
        const storage_flowerColor = await AsyncStorage.getItem('flowerColor');
        if (storage_flowerColor !== null) {
          console.log("Found flower Color")
          setFlowerColorFromStorage(storage_flowerColor);
        }
      } catch (e) {
        console.error(e);
      }
    }

    //Persistent Storage Fruit Color
    const setFruitColorFromStorage = (fruitColor_string) => {
      setFruitColor(JSON.parse(fruitColor_string));
      console.log(JSON.parse(fruitColor_string));
      console.log("Set fruit Color from Storage");
      console.log(fruitColor);
    }
    

    const storeFruitColor = async (newValue) => {
      try {
        await AsyncStorage.setItem('fruitColor', JSON.stringify(newValue))
      } catch (e) {
        console.error(e)
      }
    };

    const readFruitColor = async () => {
      try {
        const storage_fruitColor = await AsyncStorage.getItem('fruitColor');
        if (storage_fruitColor !== null) {
          console.log("Found fruit Color")
          setFruitColorFromStorage(storage_fruitColor);
        }
      } catch (e) {
        console.error(e);
      }
    }

    useEffect(() => {
      readFlowerColor();
      readFruitColor();
    }, [])

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

        <View style= {styles.section}>
          <Text style= {styles.textStyle}>Flower Color:</Text>
          <Picker
            flowerColor={flowerColor}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => storeFlowerColor(itemValue)}
          >
              <Picker.Item label="Yellow" value="yellow" />
              <Picker.Item label="Orange" value="orange" />
              <Picker.Item label="Red" value="red" />
      </Picker>
      </View>

      <View style = {styles.section}>
        <Text style = {styles.textStyle}>Fruit Color:</Text>
        <Picker
            fruitColor={fruitColor}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => storeFruitColor(itemValue)}
          >
              <Picker.Item label="Yellow" value="yellow" />
              <Picker.Item label="Orange" value="orange" />
              <Picker.Item label="Red" value="red" />
        </Picker>
      </View>

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
          marginBottom: 80, 
          flexDirection: 'row',
          alignItems: 'center',
        },
        
        checkbox: {
          margin: 8,
        },
      });
    
