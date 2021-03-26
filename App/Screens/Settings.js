/**
 * @resources 
 * https://docs.expo.io/versions/latest/sdk/checkbox/
 * https://wix.github.io/react-native-navigation/docs/style-theme/
 */
import * as React from 'react';
import { useState, useEffect } from 'react';

import { Text, View, StyleSheet, Picker, SafeAreaView } from 'react-native';
import { CheckBox } from 'react-native-elements'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';

import Logo from '../Components/Logo'
import Metrics from '../Assets/Themes/Metrics'

export default function App (props) {
    const [flowercolor, setFlowerColor] = useState("None");
  
    //If flower color in storage
    const setFlowerColorFromStorage = (flowerColor_string) => {
      //console.log("Flower Color" + flowercolor);
      setFlowerColor(flowerColor_string);
      //console.log("Flower Color after setFlowerColor in setFlowerColorFromStorage" + flowercolor);
    }

    //On selection 
    const storeFlowerColor = async (newValue) => {
      try {
        if (newValue == "red"){
          await AsyncStorage.setItem('flowerColor', "red");
          setFlowerColor("red");
          //console.log("red")
        } else if ( newValue == "yellow"){
          await AsyncStorage.setItem('flowerColor', "yellow");
          setFlowerColor("yellow");
          //console.log("yellow")
        } else if ( newValue == "orange"){
          await AsyncStorage.setItem('flowerColor', "orange");
          setFlowerColor("orange");
          //console.log("orange")
        } else {
          await AsyncStorage.setItem('flowerColor', "none");
          setFlowerColor("None");
        }
        //console.log("New Value" + newValue);
        //console.log("Flower Color inside store flower color: " + flowercolor);
     
        
      } catch (e) {
        console.error(e)
      }
      
    };

    //On load
    const readFlowerColor = async () => {
      try {
        const storage_flowerColor = await AsyncStorage.getItem('flowerColor');
        //console.log("Trying to find flower Color")
        if (storage_flowerColor !== null) {
          //console.log("Found flower Color " + storage_flowerColor)
          setFlowerColorFromStorage(storage_flowerColor);
        }
      } catch (e) {
        console.error(e);
      }
    }

    //Persistent Storage Fruit Color //////////////////////////////////////

    const [fruitcolor, setFruitColor] = useState("None");

    const setFruitColorFromStorage = (fruitColor_string) => {
      setFruitColor(fruitColor_string);
    }
    

    const storeFruitColor = async (newValue) => {
      try {
        if (newValue == "red"){
          await AsyncStorage.setItem('fruitColor', "red");
          setFruitColor("red");
          //console.log("red")
        } else if ( newValue == "yellow"){
          await AsyncStorage.setItem('fruitColor', "yellow");
          setFruitColor("yellow");
          //console.log("yellow")
        } else if ( newValue == "orange"){
          await AsyncStorage.setItem('fruitColor', "orange");
          setFruitColor("orange");
          //console.log("orange")
        } else {
          await AsyncStorage.setItem('fruitColor', "none");
          setFruitColor("None");
        }
      } catch (e) {
        console.error(e)
      }
      
    };
    const readFruitColor = async () => {
      try {
        const storage_fruitColor = await AsyncStorage.getItem('fruitColor');
        if (storage_fruitColor !== null) {
          setFruitColorFromStorage(storage_fruitColor);
        }
      } catch (e) {
        console.error(e);
      }
    }

    //Persistent Storage Edible////////////////////////////////////////////////////////////

    const [edible, setEdible] = useState(false);

    const setEdibleFromStorage = (edibleVal) => {
      //onsole.log("Edible: " + edible)
      //console.log('set edible from storage with edible val ' + edibleVal)
      if (edibleVal == "true"){
        setEdible(true);
      }else {
        setEdible(false);
      }
      //console.log("Edible: " + edible)
      
    }
 
    const storeEdible = async (newValue) => {
      try {
          if( newValue == true){
            await AsyncStorage.setItem('edible', true);
            setEdible(true);
            //console.log("set edible to true")
          } else {
            await AsyncStorage.setItem('edible', false);
            setEdible(false);
            //console.log("set edible to false")
          }
        }
       catch (e) {
        console.error(e)
      }
      
    };

    //On load
    const readEdible = async () => {
      try {
        const storage_Edible= await AsyncStorage.getItem('edible');
        if (storage_Edible !== null) {
          setEdibleFromStorage(storage_Edible);
        }
      } catch (e) {
        console.error(e);
      }
    }

    //Persistent storage Vegtable/////////////////////////////////////////////////////////////

    const [veg, setVeg] = useState(false);

    const setVegFromStorage = (vegVal) => {
      //console.log("old veg " + veg);
      if (vegVal == "true"){
        //console.log('true');
        setVeg(true);
      } else {
        setVeg(false);
        //console.log('false');
      }
      ///console.log('set veg from storage ' + vegVal);
      //console.log("new veg " + veg);

    }
 
    const storeVeg = async (newValue) => {
      try {
          if( newValue == true){
            await AsyncStorage.setItem('veg', true);
            setVeg(true);
          } else {
            await AsyncStorage.setItem('veg', false);
            setVeg(false);
          }
        }
       catch (e) {
        console.error(e)
      }
      
    };
    const readVeg = async () => {
      try {
        const storage_veg = await AsyncStorage.getItem('veg');
        if (storage_veg !== null) {
          setVegFromStorage(storage_veg);
        }
      } catch (e) {
        console.error(e);
      }
    }
    
    useEffect(() => {
      readFlowerColor();
      readFruitColor();
      readVeg();
      readEdible();
      console.log("Edible: " + edible);
      console.log("Veg: " + veg);
    }, [])
    

    const [theme, setTheme] = useState('DefaultTheme');

    const changeTheme = (item) => {
      if (item == "DarkTheme"){
        props.Navigation.setDefaultOptions({
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            primary: '#015824',
          },
        });
        Navigation.setRoot({
          root: {
            stack: {
             
            }
          }
        });
        setTheme("DarkTheme");
        console.log("set Theme Dark Theme")
      } else {
        props.Navigation.setDefaultOptions({
          ...DefaultTheme, 
          colors: {
            ...DefaultTheme.colors,
            primary: 'black'
          }
        });
        Navigation.setRoot({
          root: {
            stack: {
              
            }
          }
        });
        setTheme("DefaultTheme")
        console.log("Default theme")
      }
     
      
      console.log(item + "Change Theme");
      
    }


    return (
      <SafeAreaView style = {styles.container}>

        <View style={styles.logo}>
          <Logo />
        </View>
        
        <View style={styles.info} >
          <View style= {styles.section}>   
            <CheckBox 
              checked ={veg}
              onPress={() => storeVeg(!veg)}
              checkedColor = "green"
            />
              <Text style= {styles.textStyle}> Vegetable </Text>
          </View>

          <View style={styles.section}>
            <CheckBox 
              checked ={edible}
              onPress={() => storeEdible(!edible)}
              checkedColor = "green"
            />
            <Text style= {styles.textStyle}> Edible </Text>
          </View>

          <View style= {styles.section}>
            <Text style= {styles.textStyle}>Flower Color:</Text>
            <Picker
              selectedValue={flowercolor}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => storeFlowerColor(itemValue)}
            >
                <Picker.Item label="None" value="none" />
                <Picker.Item label="Yellow" value="yellow" />
                <Picker.Item label="Orange" value="orange" />
                <Picker.Item label="Red" value="red" />
            </Picker>
          </View>
        

          <View style = {styles.section}>
            <Text style = {styles.textStyle}>Fruit Color:</Text>
            <Picker
              selectedValue ={fruitcolor}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => storeFruitColor(itemValue)}
            >
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Yellow" value="yellow" />
            <Picker.Item label="Orange" value="orange" />
            <Picker.Item label="Red" value="red" />
          </Picker>
        </View>

        <View style= {styles.section}>   
          <Picker
              theme={theme}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue) => changeTheme(itemValue)}
            >
            <Picker.Item label="Default Theme" value="DefaultTheme" />
            <Picker.Item label="Dark Theme" value="DarkTheme" />
          </Picker>
              <Text style= {styles.textStyle}> Dark Theme </Text>
        </View>
      </View>

      </SafeAreaView>



    );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
        textStyle: {
          fontSize: 30,
          padding: 20, 
        },
        
        section: {
          marginBottom: 40, 
          flexDirection: 'row',
          alignItems: 'center',
        },
        
        checkbox: {
          margin: 8,
        },

        logo: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: Metrics.images.logo * .5, 
        },
        info: {
          margin: 20
        }
      });
    
