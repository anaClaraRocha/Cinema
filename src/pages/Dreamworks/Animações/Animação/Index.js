import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useRoute } from '@react-navigation/native';

export default function App() {
  const route = useRoute();
  const [filme, setFilme] = useState([
   {
      nome: 'Treinar o seu Dragão',
      imagem: <Image source={require('../../../../../assets/COMO TREINAR O SEU DRAGÃO 3.jpg')} style={styles.imgD4}></Image>,
      informaçoes: 'Decidido a fazer de Berk um verdadeiro libelo ao ideal da convivência pacífica entre homens e dragões, Soluço segue atrás de caçadores, para libertar suas presas. O esforço do grupo desperta a atenção de Grimmel ao descobrir que entre eles está Banguel. O vilão então desenvolve um plano para capturá-lo a todo custo, usando como arma uma fêmea capturada, da mesma espécie.',
      fundo:require('../../../../../assets/DragaoPainel.jpg')
    },
    {
      nome:'TROLLS',
      imagem: <Image source={require('../../../../../assets/Trolls.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Tronco parte para uma jornada de descobertas e aventuras ao lado de Poppy, líder dos Trolls. Inicialmente inimigos, conforme os desafios são superados eles descobrem que no fundo combinam mais do que imaginam.',
      fundo:require('../../../../../assets/TrollsPainel.jpg')
    },
    {
      nome:'Kung Fu Panda',
      imagem: <Image source={require('../../../../../assets/KUNG FU PANDA.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Po é um urso panda desajeitado, que trabalha no restaurante de sua família. Um dia ele é surpreendido ao saber que foi escolhido para cumprir uma antiga profecia, o que faz com que treine ao lado de seus ídolos no kung fu: os mestres Shifu, Garça, Tigresa, Louva-deus, Macaco e Víbora. Quando o traiçoeiro leopardo da neve Tai Lung retorna, cabe a Po defender o Vale da Paz.',
      fundo:require('../../../../../assets/PANDAPainel.jpg')
    },
    {
      nome:'MEGAMENTE',
      imagem: <Image source={require('../../../../../assets/MEGAMENTE.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Tudo o que vilão Megamente mais queria era eliminar seu adversário Metro Man e assim dominar a cidade de Metro City. Só que para isso era necessário um plano maior que todos já tentados antes. Um dia, com a ajuda de Criado e após sequestrar a Rosane Rocha, o malvado consegue o inimaginável, dar um sumiço no herói. A única coisa que ele não contava era que sua vida se tornaria tão chata a ponto de ele inventar um herói para combater.',
      fundo:require('../../../../../assets/MEGAMENTEpainel.jpg')
    },
    {
      nome:'Madagáscar',
      imagem: <Image source={require('../../../../../assets/Madagascar (2005).jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Alex, o leão, é principal atração do Zoológico central de Nova York. Ele e seus melhores amigos, Marty, Melman, e Gloria, passaram a vida toda em cativeiro feliz diante de um público admirador e com refeições regulares fornecidas para eles. Não contente em deixar bem sozinho, Marty deixa sua curiosidade tirar o melhor dele e faz sua fuga, com a ajuda de alguns pinguins prodigiosos, para explorar o mundo. ',
      fundo:require('../../../../../assets/MadagascarPainel.jpg')
    },
    {
      nome:'Os Croods',
      imagem:<Image source={require('../../../../../assets/The Croods (2013).jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Em plena era pré-histórica, escondidos na maior parte do tempo, vivem Grug, Ugga, Thunk, Sandy, Eep. Eles são os Croods, uma família liderada por um pai que morre de medo do mundo exterior. Só que grandes transformações estão para acontecer, pois a Eep acaba conhecendo o também jovem Guy e ele vai apresentar um mundo novo, para o desespero do paizão protetor. Agora, juntos, eles vão enfrentar grandes desafios.',
      fundo:require('../../../../../assets/CroodsPainel.jpg')
    },
  ])
  
  const navigation = useNavigation();
  return (
    <View style={styles.borda}>
      <ImageBackground source={filme[route.params?.indice].fundo} style={styles.imgD42}>
        <View style={styles.brnArea2}>
          <TouchableOpacity onPress={() => navigation.navigate('Dreamworks')}><View style={styles.btnArea}><Image source={require('../../../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
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