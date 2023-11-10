import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, Switch, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';

export default function App() {
    const navigation = useNavigation();
    return(
        <View style={styles.borda}>
        <View style={styles.brnArea2}>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>Territorios</Text>
                 
               </View>
               
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('Config')}> <View style={styles.btnArea}><Image source={require('../../../assets/8687336_ic_fluent_line_horizontal_3_icon.png')} style={styles.imgD2}></Image></View></TouchableOpacity>
            </View>
            
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Agua')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/OIPs.jpg')} style={styles.imgD4}>
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}><Text style={styles.btnTexto2}>Aquaticos</Text> </View></ImageBackground>
                 
               </View>
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Ceu')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/depositphotos_40613917-stock-photo-heart-on-the-sky.jpg')} style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}><Text style={styles.btnTexto2}>Voadores</Text> </View></ImageBackground>
                 
               </View>
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Rastejante')} >
               <View style={styles.btnArea}>
               
               
               
                 <ImageBackground source={require('../../../assets/R.jpg')}style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}><Text style={styles.btnTexto2}>Rastejantes</Text> </View></ImageBackground>
                 
               </View>
               </TouchableOpacity>
               </View>
               <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Floresta')} >
               <View style={styles.btnArea}>
               
               
                 <ImageBackground source={require('../../../assets/desmatadas-jpg.jpg')}style={styles.imgD4}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}><Text style={styles.btnTexto2}>Floresta</Text> </View></ImageBackground>
                 
               </View>
               </TouchableOpacity>
               </View>
               
               <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      
      <Image source={require('../../../assets/OIP.jpg')}style={styles.imgD3}></Image>
      
      </View>
      <View style={styles.brnArea2}>
      <Text style={styles.txt2}>Nome do Zoologico</Text></View>
            </View>
            
    )
}