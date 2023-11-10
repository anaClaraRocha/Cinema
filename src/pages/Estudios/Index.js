import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, Switch, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useFonts } from 'expo-font';
export default function App() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
      Walter: require('../../../assets/fonts/Disney family 1.ttf'),
      
    });
    
    if (!loaded) {
      return null;
    }
    return(
        <View style={styles.borda}>
          <ImageBackground source={require('../../../assets/cb1cfa603b242af2e2e91c7af759eb67.jpg')} style={styles.imgD42}>
        <View style={styles.brnArea2}>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>Estudios</Text>
                 
               </View>
               
            </View>
            
            
            </View>
            
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Disney')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/giphy.gif')} style={styles.imgD4}>
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
                  </View></ImageBackground>
                 
               </View>
               
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pixar')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/anigif_sub-buzz-21568-1465934162-4.gif')} style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}> </View></ImageBackground>
                 
               </View>
               
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dreamworks')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/200.gif')}style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}></View></ImageBackground>
                 
               </View>
               
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CartoonNetworks')} >
               <View style={styles.btnArea}>
               
               
                 <ImageBackground source={require('../../../assets/main.gif')}style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}> </View></ImageBackground>
                 
               </View>
               
               </TouchableOpacity>
               </View>
               
              
      
      </ImageBackground>
            </View>
            
    )
}