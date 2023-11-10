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
      nome: 'Steven Universo',
      imagem: <Image source={require('../../../../../assets/STEVEN UNIVERSO FILME.jpg')} style={styles.imgD4}/>,
      informaçoes: 'Steven é um jovem menino que amadurece sob os cuidados das alienígenas Pearl, Garnet e Amethyst. Elas são Crystal Gems, seres que usam seus poderes mágicos para proteger o universo. Juntos, eles vivem grandes aventuras e lidam com perigosas ameaças, enquanto Steven aprende a lidar com seus próprios dons.',
      fundo:require('../../../../../assets/STEVEN UNIVERSOPAinel.jpg'),
    },
    {
      nome:'Jovens Titãs',
      imagem: <Image source={require('../../../../../assets/OS JOVENS TITÃS EM AÇÃo.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Robin, Ciborgue, Estelar, Ravena e Mutano são os Jovens Titãs. Ao perceberem que todos os super-heróis estão estrelando filmes, eles decidem se mobilizar para também ter espaço nas telas. O líder do grupo, está determinado a ser visto como um astro e com ideias malucas e até uma canção eles partem em busca de um diretor de Hollywood, mas acabam enganados por um supervilão.',
      fundo:require('../../../../../assets/JovensPainel.jpg')
    },
    {
      nome:'Mundo de Gumball',
      imagem: <Image source={require('../../../../../assets/O Incrível Mundo de Gumball.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'O filme começa quando o maior fã de Gumball encontra o episódio perdido do programa e acidentalmente abre um portal conectando seu mundo ao mundo dos desenhos animados. Ao conhecer seus heróis, nosso superfã decide se unir a Gumball, Darwin, Anais, Richard e Nicole para salvá-los de uma força nefasta que toma conta de Elmore.',
      fundo:require('../../../../../assets/GumballPainel.jpg')
    },
    {
      nome:'Hora de Aventura',
      imagem: <Image source={require('../../../../../assets/Hora de Aventura.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'A série segue as aventuras de Finn, o Humano e o seu melhor amigo e irmão adotivo Jake, o Cão; que se aventuram na Terra de Ooo, num futuro pós-apocalíptico por volta de mil anos após a "Grande Guerra dos Cogumelos", sendo Finn presumidamente o último humano existente',
      fundo:require('../../../../../assets/Hora de AventuraPainel.jpg')
    },
    {
      nome:'Ben 10',
      imagem: <Image source={require('../../../../../assets/Ben 10.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Aos 10 anos de idade, Benjamin Kirby Tennyson descobre um dispositivo alienígena na floresta chamado de Omnitrix, que lhe permite se transformar em 10 diferentes espécies alienígenas.',
      fundo:require('../../../../../assets/BenPainel.jpg')
    },
    {
      nome:'Meninas Superpoderosas',
      imagem:<Image source={require('../../../../../assets/As Meninas Superpoderosas.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Florzinha, Lindinha e Docinho estão no jardim da infância. Apesar disso, possuem poderes incríveis. É que a explosão do Elemento X causou mutações no trio e no assistente de laboratório do Professor, que se transformou no gênio do mal, o Macaco Loco!.',
      fundo:require('../../../../../assets/SuperpoderosasPainel.jpg')
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
          <TouchableOpacity onPress={() => navigation.navigate('CartoonNetworks')}><View style={styles.btnArea}><Image source={require('../../../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
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