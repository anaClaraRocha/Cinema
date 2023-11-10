import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, Switch, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { ImageBackground } from 'react-native-web';

export default function App() {
    const navigation = useNavigation();
    return(
    <View style={styles.borda}>
        <View style={styles.brnArea2}>
            <TouchableOpacity onPress={() => navigation.navigate('territorios')}><View style={styles.btnArea}><Image source={require('../../../assets/OIPss.jpg')} style={styles.imgD22}></Image></View></TouchableOpacity>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>Aquaticos</Text>
                 
               </View>
               
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('Config')}> <View style={styles.btnArea}><Image source={require('../../../assets/8687336_ic_fluent_line_horizontal_3_icon.png')} style={styles.imgD2}></Image></View></TouchableOpacity>
            </View>
            
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Animal1')} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/OIaP.jpg')} style={styles.imgD4}></Image>
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Tubarão</Text> </View>
                 
               </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Animal2')} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/OIPs.jpg')} style={styles.imgD4}></Image>
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Aquaticos</Text> </View>
                 
               </View>
               </TouchableOpacity>
               </View>
               <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Animal3')} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/OIPs.jpg')} style={styles.imgD4}></Image>
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Aquaticos</Text> </View>
                 
               </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Animal4')} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/OIPs.jpg')} style={styles.imgD4}></Image>
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Aquaticos</Text> </View>
                 
               </View>
               </TouchableOpacity>
               </View>
               <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Animal5')} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/OIPs.jpg')} style={styles.imgD4}></Image>
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Aquaticos</Text> </View>
                 
               </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Animal6')} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/OIPs.jpg')} style={styles.imgD4}></Image>
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Aquaticos</Text> </View>
                 
               </View>
               </TouchableOpacity>
               </View>
            </View>
            )}