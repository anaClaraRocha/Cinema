import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
export default function App() {
  const route = useRoute();
  const [filme, setFilme] = useState([
   {
      nome: 'A VIDA É UMA FESTA',
      imagem: <Image source={require('../../../../../assets/VIVA - A VIDA É UMA FESTA.jpg')} style={styles.imgD4}></Image>,
      informaçoes: 'Miguel é um menino de 12 anos que quer muito ser um músico famoso, mas ele precisa lidar com sua família que desaprova seu sonho. Determinado a virar o jogo, ele acaba desencadeando uma série de eventos ligados a um mistério de 100 anos. A aventura, com inspiração no feriado mexicano do Dia dos Mortos, acaba gerando uma extraordinária reunião familiar.',
      fundo:require('../../../../../assets/VivaPainel.jpg')
    },
    {
      nome:'Up Altas Aventuras',
      imagem: <Image source={require('../../../../../assets/Up Altas aventuras.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Carl Fredricksen, um vendedor de balões de 78 anos, está prestes a realizar um sonho ao longo da vida. Amarrando milhares de balões em sua casa, ele voa para o deserto sul-americano. Mas o pior pesadelo de Carl se torna realidade quando ele descobre que um garotinho chamado Russell é um clandestino a bordo da casa movida a balões.',
      fundo:require('../../../../../assets/UpPainel.jpg')
    },
    {
      nome:'Os Incríveis',
      imagem: <Image source={require('../../../../../assets/Os Incríveis.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Os super-heróis casados Sr. Incrível e Mulher Elastica são forçados a assumir vidas diferentes como Bob e Helen Parr depois de todas as atividades superpoderosas terem sido proibidas pelo governo. Enquanto o Sr. Incrível vivi uma vida como Bob, ele advoga voltar para uma vida de aventura, e ele tem uma chance quando convocado para uma ilha para lutar contra um robô fora de controle. Em breve, o Sr. Incrível está em apuros, e cabe à família salvá-lo.',
      fundo:require('../../../../../assets/IncriveisPainel.jpg')
    },
    {
      nome:'LUCA',
      imagem: <Image source={require('../../../../../assets/Luca.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Vemos um monstro do mar, Luca. Em um dia, Luca, acha alguns objetos que vieram da superfície e acaba conhecendo Alberto. Luca então decide ir com Alberto para superfície, onde ele percebe que ao entrar em contato com a terra, fica com corpo de humano e consegue andar. Ficando apaixonado pelos humanos, Luca e Alberto combinam de ir para a vila mais próxima. Eles conhecem Júlia, uma garota humana e seu pai.',
      fundo:require('../../../../../assets/LucaPainel.jpg')
    },
    {
      nome:'Carros',
      imagem: <Image source={require('../../../../../assets/Carros.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Relâmpago McQueen é um carro de corridas ambicioso, ele sonha em se tornar o 1º estreante a vencer o campeonato. O problema permite que seus dois principais adversários, o ídolo Rei e o Chicks, cruzem a linha de chegada juntamente com ele, o que faz com que uma corrida de desempate seja agendada na California.',
      fundo:require('../../../../../assets/CarrosPainel.jpg')
    },
    {
      nome:'Ratatouille',
      imagem:<Image source={require('../../../../../assets/Ratatouille.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Remy é apenas um rato de esgoto, um dia inspirado pela culinário do chef, Gusteau. Remy, vai a Paris em frente ao restaurante do chef. Entrando no local para realizar um sonho, ele acaba conhecendo Linguine, filho bastardo do renomado chef. Em uma ideia mirabolante dos dois, Remy passa a ser o real "cozinheiro" que comanda Linguine embaixo de seu chapéu de chef, para que o menino reivindique o restaurante como herdeiro.',
      fundo:require('../../../../../assets/RatatouillePainel.jpg')
    },
  ])
  const [loaded] = useFonts({
    Walter: require('../../../../../assets/fonts/Disney family 1.ttf'),
    
  });
  
  if (!loaded) {
    return null;
  }
  const navigation = useNavigation();
  return (
    <View style={styles.borda}>
      <ImageBackground source={filme[route.params?.indice].fundo} style={styles.imgD42}>
        <View style={styles.brnArea2}>
          <TouchableOpacity onPress={() => navigation.navigate('Pixar')}><View style={styles.btnArea}><Image source={require('../../../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
          <View style={styles.botao2}  >
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>{filme[route.params?.indice].nome}</Text>

            </View>
          </View>
        </View>

        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <View style={styles.botao}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {filme[route.params?.indice].imagem}


            </View>
          </View>
        </View>
        <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}><View style={styles.view}><Text style={styles.btnTexto3}>{filme[route.params?.indice].informaçoes}</Text></View></View>
        </ImageBackground>
    </View>
  )
}