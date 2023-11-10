import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, Switch, TouchableOpacity,  Modal, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { ImageBackground } from 'react-native-web';

import { useFonts } from 'expo-font';


export default function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirme, setConfirme] = useState("");
  const [visivel, setVisivel] = useState(false);
  const [visivel1, setVisivel1] = useState(false);
  const [sexo, setSexo] = useState("Feminino");
  function Verificar(){
    if(nome == ("") || telefone == ("") || email == ("") || senha == ("")){
      
        
        setVisivel(true)
    }else if(senha != confirme){
      setVisivel1(true)
    }else {
      localStorage.setItem("nome",[nome])
   
      localStorage.setItem("telefone",[telefone])
      localStorage.setItem("email",[email])
      localStorage.setItem("sexo",[sexo])
      localStorage.setItem("senha",[senha])
      navigation.navigate('Estudios')
    }
  }
 
  const navigation = useNavigation();
  function filterText(text) {
    this.setState({
        text: text.replace(/([^\d\s/-])/g, '')
    });
}


  return (
    
      
       <View style={styles.borda}>
         <Modal visible={visivel1} animationType="fade" transparent={true} onRequestClose={() => setVisivel1(false)}>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#000000cc',
                }}
                    onPressOut={() => setVisivel1(false)}>
                    <TouchableWithoutFeedback>

                        <View style={{ width: '80%', height: '20%', padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
                            <View style={{ flex: 1, textAlign: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Erro</Text>
                                </View>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                            </View>
                            <br></br>
                            <View style={{ flex: 6, justifyContent: 'space-evenly' }}>
                                <View style={{ flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>As senhas não coincidem</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => setVisivel1(false)} style={{ width: 100, backgroundColor: 'orange', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                                        Voltar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </TouchableOpacity>
            </Modal>
         <Modal visible={visivel} animationType="fade" transparent={true} onRequestClose={() => setVisivel(false)}>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#000000cc',
                }}
                    onPressOut={() => setVisivel(false)}>
                    <TouchableWithoutFeedback>

                        <View style={{ width: '80%', height: '20%', padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
                            <View style={{ flex: 1, textAlign: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                <View style={{ flex: 2 }}>
                                    <Text style={styles.btnTexto2}>Erro</Text>
                                </View>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                            </View>
                            <br></br>
                            <View style={{ flex: 6, justifyContent: 'space-evenly' }}>
                                <View style={{ flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={styles.btnTexto2}>Algum campo está vazio</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => setVisivel(false)} style={{ width: 100, backgroundColor: 'orange', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                                    <Text style={styles.VoltarTexto2}>
                                        Voltar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </TouchableOpacity>
            </Modal>
           
        <ImageBackground source={require('../../../assets/e8937a4f8098ec4e92bf78396dc04bc6.jpg')} style={styles.imgD42}>
       
       <View style={styles.brnArea2}>

           <View style={styles.botao2}>
            
              <View style={styles.btnArea}>
                
                <Text style={styles.btnTexto}>Cadastro</Text>
                
              </View>
              
              </View>
             
              </View>
       <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', marginTop:'50px' }}>
      
      <Image source={require('../../../assets/grupo.png')}style={styles.imgD}></Image>
      </View>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', marginTop:'40px' }}>
    
        
        <TextInput
          placeholder={'Digite seu nome'}
          style={{ height: 40, width: '97%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingLeft: 5, fontSize:16, backgroundColor:'white',  fontFamily:'Walter', }}
          value={nome}
          required
          
          onChangeText={text => setNome(text)}
          
        />
       



        <TextInput
          placeholder={'Digite seu telefone'}
          style={{ height: 35, width: '97%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingLeft: 5, fontSize:16, backgroundColor:'white',  fontFamily:'Walter', }}
          value={telefone}
          onChangeText={text => setTelefone(text)}
          keyboardType='phone-pad'
          
        />
        <TextInput
          placeholder={'Digite seu email'}
          style={{ height: 40, width: '97%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingLeft: 5, fontSize:16, backgroundColor:'white',  fontFamily:'Walter', }}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType='email-address'

        />
         <TextInput
          placeholder={'Digite sua Senha'}
          style={{ height: 40, width: '97%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingLeft: 5, fontSize:16, backgroundColor:'white',  fontFamily:'Walter', }}
          value={senha}
          onChangeText={text => setSenha(text)}
          keyboardType='number-pad'
          secureTextEntry={true}
        />
        <TextInput
          placeholder={'Confirme sua Senha'}
          style={{ height: 40, width: '97%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingLeft: 5, fontSize:16, backgroundColor:'white',  fontFamily:'Walter', }}
          value={confirme}
          onChangeText={text => setConfirme(text)}
          keyboardType='number-pad'
          secureTextEntry={true}
        />
     
     </View>
     <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center',  }}>
      <View style={styles.container}>
        
      
        <select

          value={sexo}
          onChange={text => setSexo(text.target.value)}
          style={{ height: 50, width: '100%', borderWidth: 1, borderRadius: 10,  fontSize:20,  fontFamily:'Walter', }}>

          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Nao">Prefiro Não Dizer</option>
          <option value="Outros">Outros</option>
        </select>
        </View>
        
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.botao} onPress={() => Verificar()} >
              <View style={styles.btnArea}>
                <Text style={styles.btnTexto}>Cadastrar</Text>
                
              </View>
              
            </TouchableOpacity>
            
      
      </View>
      
      
      </View>
      </ImageBackground>
      </View>
      
     
      
  
  );
}