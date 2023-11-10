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
      nome: 'Rei Leão',
      imagem: <Image source={require('../../../../../assets/reileao.png')} style={styles.imgD4}/>,
      informaçoes: 'O clássico da Disney, O Rei Leão, Simba é um jovem leão cujo destino é se tornar o rei da selva. Entretanto, uma armadilha elaborada por seu tio Scar faz com que Mufasa, o atual rei, morra ao tentar salvar o filhote. Consumido pela culpa, Simba deixa o reino rumo a um local distante, onde encontra amigos que o ensinam a mais uma vez ter prazer pela vida.',
      fundo:require('../../../../../assets/ed4889606159095b2aef327031fd9f82.jpg'),
    },
    {
      nome:'Moana',
      imagem: <Image source={require('../../../../../assets/MOANA.png')} style={styles.imgD4}></Image>,
      informaçoes:'Moana é uma corajosa jovem, filha chefe de uma tribo. Quando os pescadores de sua ilha não conseguem pescar nenhum peixe e as colheitas falham, ela descobre que o semideus Maui causou a praga ao roubar o coração da deusa Te Fiti. Então, ela resolve partir em busca de Maui, para devolver o coração de Te Fiti, com isso Moana parte em uma jornada pelo Pacífico.',
      fundo:require('../../../../../assets/MoanaPainel.jpg')
    },
    {
      nome:'Encanto',
      imagem: <Image source={require('../../../../../assets/Encanto.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'A família Madrigal é cercada por montanhas, que os deixam protegidos dos maus do mundo. Porém, a família Madrigal é dotada de magia. Apesar da família ter magia, apenas um integrante dela não recebeu seu dom, Mirabel, que sempre tenta ajudar a família como consegue, mas ela nunca consegue agradar sua Abuela. Um dia, ela vê a casa da família rachando. Mirabel então parte em uma aventura própria para achar o que há de errado com a casa.',
      fundo:require('../../../../../assets/EncantoPainel.jpg')
    },
    {
      nome:'Zootopia',
      imagem: <Image source={require('../../../../../assets/Zootopia2.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'Em Zootopia acompanhamos a história de Judy Hopps. Ela tem sonhos maiores de se mudar para a cidade grande, Zootopia, e se tornar a primeira coelha policial. Quando Judy consegue alcançar o seu objetivo, ela é designada para a sua primeira e grande missão. Contando com a ajuda inesperada de Nick, uma raposa conhecida por sua malícia e infrações, ela descobre que existe uma conspiração que afetará toda a cidade.',
      fundo:require('../../../../../assets/zootopiaPainel.jpg')
    },
    {
      nome:'Procurando Nemo',
      imagem: <Image source={require('../../../../../assets/PROCURANDO NEMO.jpg')} style={styles.imgD4}></Image>,
      informaçoes:'O passado com tristes memórias para Marlin nos recifes de coral, sua família. Agora, ele cria seu único filho Nemo com todo o cuidado do mundo, mas o pequeno peixe-palhaço acaba entrando em uma simples discussão e acaba sendo capturado. Agora, o Marlin precisa entrar em ação e parte numa busca incansável pelo mar aberto, na esperança de encontrar seu amado filhote. No meio do caminho, ele acaba conhecendo Dory e, juntos, a dupla vai viver uma incrível aventura.',
      fundo:require('../../../../../assets/PROCURANDOPainel.jpg')
    },
    {
      nome:'A Bela e a Fera',
      imagem:<Image source={require('../../../../../assets/A BELA E A FERA.png')} style={styles.imgD4}></Image>,
      informaçoes:'Em uma pequena aldeia da França vive Bela junto com o seu pai, Maurice. Maurice vai para uma feira demonstrar sua nova invenção, ele acaba se perdendo na floresta e é atacado por lobos. Desesperado, Maurice procura abrigo em um castelo, mas acaba se tornando prisioneiro da Fera, que na verdade é um príncipe que foi amaldiçoado. Quando Bela sente que algo aconteceu ao seu pai vai à sua procura. Ela chega ao castelo e lá faz um acordo com a Fera. A Fera concorda.',
      fundo:require('../../../../../assets/BelaeFeraPainel.jpg')
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
          <TouchableOpacity onPress={() => navigation.navigate('Disney')}><View style={styles.btnArea}><Image source={require('../../../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
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