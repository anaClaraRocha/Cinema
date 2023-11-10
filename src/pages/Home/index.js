import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

import styles from './styles';

export default function App() {

    const navigation = useNavigation();
    function Cadastro(){
    if(localStorage.getItem("sexo") || localStorage.getItem("nome") || localStorage.getItem("email") || localStorage.getItem("telefone") || localStorage.getItem("senha")){
    setTimeout(() => {
        navigation.navigate('Estudios')
    }, 2000);}else {
        setTimeout(() => {
            navigation.navigate('Cadastro')
        }, 2000);
    }
}
    return (
        <View style={styles.borda}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
           <Image source={require('../../../assets/Pandinha.gif')}style={styles.imgD}></Image> 
          
               {Cadastro()}
       
            <StatusBar style="auto" />
        </View>
        </View>
    );
}
