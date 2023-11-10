import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image, Switch, TouchableOpacity, Modal  } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
export default function App() {
   const route = useRoute();
   const [info, setInfo] = useState([
      {
        nome: 'Disney',
        sobre: 'A princípio, a história da Disney começou no início de 1923, mais especificamente em Kansas City, Missouri. Nesse contexto, Walt Disney criou um curta-metragem com o nome “Alice’s Wonderland” com presença de uma atriz mirim interagindo com personagens animados. Posteriormente, o animador mudou-se para Hollywood e juntou-se a seu irmão. Dessa forma, fundaram a Disney Brothers Cartoon Studios em 16 de outubro de 1923. Logo em seguida, a distribuidora MJ Winkler Production contatou-os com a intenção de distribuir uma série de Alice Comedies, por cerca de 1,5 mil dólares. Como consequência, outros filmes animados surgiram diante do sucesso da produção. Eventualmente, houve início da expansão do estúdio Disney, e também alteração em janeiro de 1926 para o nome Walt Disney Studios. Apesar disso, o principal personagem da época foi Oswald, o Coelho Sortudo. No entanto, após produzir 26 curtas sobre o personagem, ele perdeu o contrato em fevereiro de 1928 quando outra pessoa assumiu a empresa de distribuição da produção. Por outro lado, Walt Disney criou o rato Mortimer em 1928 por meio de desenho simples feitos em uma viagem de trem para a Califórnia. Porém, sua esposa sugeriu que o nome fosse Mickey Mouse porque era mais informal e simples de se lembrar.',
        fundador: 'Walt Disney (1901-1966) foi um empresário norte-americano. Fundou junto com o irmão Roy Disney, a Walt Disney Company. Criou o maior estúdio de animação de Hollywood, e os parques temáticos da Disney, na Califórnia, na Flórida, na França, no Japão e em Hong Kong. Walt Disney (1901-1966) nasceu em Chicago, Estados Unidos, no dia 5 de dezembro de 1901. Filho do empreiteiro Elias Disney e da professora Flora Call Disney. Com 7 anos já revelava talento para o desenho. Com 14 anos ingressou no Kansas City Art Institute. Com 16 anos, entrou para a Cruz Vermelha, onde era motorista de ambulância. Com 18 anos retornou para Kansas City e iniciou a carreira de cartunista de propaganda e depois passou a produzir filmes publicitários.',
        NomeFundador:'Walt Disney',
        imagem: <Image source={require('../../../assets/fundadorDisney.png')} style={styles.imgD4}></Image>,
        fundo:require('../../../assets/34464f87266ff3941057bfcd1e47ff7b--disney-disney-disney-love.jpg')
      
      },
      {
         nome: 'Pixar',
         sobre: 'Pixar Animation Studios, também conhecida como Pixar , é um estúdio americano de animação por computador com sede em Emeryville, Califórnia, uma subsidiária da Disney Studios Content de propriedade da The Walt Disney Company. A Pixar começou em 1976 como parte da divisão de computadores Lucasfilm, conhecida como Graphics Group, antes de sua cisão como uma corporação em 3 de fevereiro de 1986, com financiamento do co-fundador da Apple, Steve Jobs, que se tornou seu acionista majoritário. A Disney comprou a Pixar em 2006 por uma avaliação de 7,4 bilhões de dólares, convertendo cada ação da Pixar em 2,3 ações da Disney, uma transação que resultou em Jobs se tornando o maior acionista individual da Disney na época. A Pixar é mais conhecida por seus filmes tecnologicamente desenvolvidos por RenderMan, a implementação da própria empresa da interface de programação de aplicativos de renderização de imagens RenderMan Interface Specification. Luxo Jr., um abajur do curta-metragem homônimo de 1986, é a mascote do estúdio. A Pixar produziu 23 longas-metragens, começando com Toy Story (1995), que foi o primeiro longa-metragem animado por computador; seu filme mais recente foi Luca (2021). ',
         fundador: 'Steven Paul Jobs (São Francisco, 24 de fevereiro de 1955 — Palo Alto, 5 de outubro de 2011) foi um inventor, empresário e magnata americano no setor da informática. Notabilizou-se como co-fundador, presidente e diretor executivo da Apple Inc. e por revolucionar seis indústrias: computadores pessoais, filmes de animação, música, telefones, tablets e publicações digitais. Além de sua ligação com a Apple, foi diretor executivo da empresa de animação por computação gráfica Pixar e acionista individual máximo da The Walt Disney Company. Morreu no dia 5 de outubro de 2011, aos 56 anos de idade, devido a um câncer pancreático.',
        NomeFundador:'Steve Jobs',
         imagem: <Image source={require('../../../assets/CoFundadorPixar.jpg')} style={styles.imgD4}></Image>,
         fundo:require('../../../assets/PainelPixar.jpg')
       
       },
       {
         nome: 'Dream Works',
         sobre: 'DreamWorks Animation LLC (também conhecida simplesmente como DreamWorks) é um estúdio de animação americano e uma subsidiária da NBCUniversal. Está sediada em Glendale, Califórnia, e produz filmes animados, programas de televisão e jogos virtuais online. Atualmente, o estúdio lançou um total de 38 longas-metragens, começando com FormiguinhaZ (1998) até seu filme mais recente Os Caras Malvados (2022). Em apenas 10 anos de existência, se tornou a maior concorrente da Walt Disney Animation Studios no quesito animação. Foi originalmente formada como uma divisão da DreamWorks Pictures em 1994 por alguns ex-alunos do antigo ramo de animação da Amblin Entertainment, foi transformada em uma empresa pública separada em 2004. A DreamWorks Animation atualmente mantém seu campus em Glendale e também estúdios de satélite na Índia e China. Em 22 de agosto de 2016, a Comcast adquiriu a DreamWorks Animation por US $ 3,8 bilhões, tornando-a uma divisão da NBCUniversal. Em maio de 2019, seus filmes arrecadaram US $ 15,019 bilhões em todo o mundo com uma média bruta de US $ 417,2 milhões por filme. Quinze dos filmes produzidos pelo estúdio estão entre os 50 filmes de animação com maior bilheteria de todos os tempos, com Shrek 2 tendo a décima primeira maior bilheteria.',
         fundador: 'Steven Spielberg é filho dos judeus Leah Posner Spielberg Adler, restauradora e pianista de concerto, e Arnold Spielberg, que era um engenheiro eletricista envolvido no desenvolvimento de computadores. Nasceu na cidade de Cincinnati, mas morou grande parte da sua vida em Phoenix. Ainda criança foi para o Sudeste da cidade de Austen na Austrália aos cuidados de Zalman e Pearl Segal após a separação de seus pais, enquanto suas três irmãs ficaram com a mãe no Arizona. Sendo o irmão mais velho de três irmãs, usava-as costumeiramente como cobaias em seus filmes caseiros. Assim como a grande maioria dos cineastas, começou a filmar com uma câmera super-8 ainda na sua infância.',
        NomeFundador:'Steven Spielberg',
         imagem: <Image source={require('../../../assets/FundadorDreamworks.jpg')} style={styles.imgD4}></Image>,
         fundo:require('../../../assets/DreamworksPainel.jpg')
       
       },
       {
         nome: 'Cartoon Network',
         sobre: 'O canal de televisão Cartoon Network foi lançado em outubro de 1992 nos Estados Unidos pela Turner Broadcasting, transmitindo desenhos e séries animadas 24 horas por dia. A programação inicial era composta por desenhos e filmes infantis do acervo da Warner Bros, MGM Cartoon e Hanna-Barbera. No ano seguinte foi lançado na Europa em 5 línguas (inglês, espanhol, sueco, francês e italiano). Ainda neste ano o Cartoon Network foi lançado na América Latina em três idiomas (inglês, espanhol e português). No ano de 1997 foi introduzido no Japão, como primeiro canal exclusivo de desenhos para a região da Ásia e do Pacífico. No ano de 2000 o canal diversificou ao lançar o Boomerang, um canal que transmite desenhos clássicos do acervo de Hanna-Barbera. Desde seu lançamento no mercado o canal está entre os mais assistidos dos Estados Unidos.Atualmente o canal é assistido em cerca de 71,3 milhões de casas nos Estados Unidos e transmitido para 145 países ao redor do mundo.',
         fundador: 'Robert Edward Turner III, conhecido como Ted Turner (Cincinnati, 19 de novembro de 1938) é um magnata da mídia americano e filantropo. Como homem de negócios, é melhor conhecido como o fundador do canal a cabo CNN, o primeiro dedicado 24 horas às notícias. Além disso, é um dos maiores sócios do grupo Warner Bros. Discovery. O império da mídia de Turner começou ao assumir, com 24 anos, o negócio de outdoors do seu pai após seu suicídio. Esse negócio, Turner Outdoor Advertising, valia aproximadamente um milhão de dólares quando Turner assumiu o controle em 1963. A compra de uma estação UHF em Atlanta em 1970 tornou-se o começo da Turner Broadcasting System. ',
        NomeFundador:'Ted Turner',
         imagem: <Image source={require('../../../assets/FundadorCartoon.jpg')} style={styles.imgD4}></Image>,
         fundo:require('../../../assets/CartoonPainel.jpg')
       
       },
     
    ])
    const navigation = useNavigation();
    const [visivel, setVisivel] = useState(false);
    const [visivel1, setVisivel1] = useState(false);
    const [visivel2, setVisivel2] = useState(false);
    const [visivel3, setVisivel3] = useState(false);
    const [visivel4, setVisivel4] = useState(false);
    const [visivel5, setVisivel5] = useState(false);
    function mesdia1() {
        
            setVisivel1(true)
    
    
    
    
    
          
    
        }
        function mesdia2() {
        
            setVisivel2(true)
    
    
    
    
    
          
    
        }
        function Volatre(){
          if (route.params?.indice == 0 ) {
            navigation.navigate('Disney')
          }else if (route.params?.indice == 1){
           
              navigation.navigate('Pixar')
            
          }else if (route.params?.indice== 2){
           
            navigation.navigate('Dreamworks')
          
        }else if (route.params?.indice == 3){
          navigation.navigate('CartoonNetworks')
        }
      }
        function mesdia3() {
        
            setVisivel3(true)
    
    
    
    
    
          
    
        }
        function mesdia() {
        
            setVisivel(true)
    
    
    
    
    
          
    
        }
        function mesdia4() {
        
            setVisivel4(true)
    
    
    
    
    
          
    
        }
        function mesdia5() {
        
            setVisivel5(true)
    
    
    
    
    
          
    
        }
        
        function voltar() {
            setVisivel(false)
            setVisivel1(false)
            setVisivel3(false)
            setVisivel2(false)
            setVisivel4(false)
            setVisivel5(false)
          }
      
      
     
          const [loaded] = useFonts({
            Walter: require('../../../assets/fonts/Disney family 1.ttf'),
            
          });
          
          if (!loaded) {
            return null;
          }
    return(
    <View style={styles.borda}>
         <ImageBackground source={info[route.params?.indice].fundo} style={styles.imgD42}>
         <View style={styles.brnArea22}>
            <TouchableOpacity onPress={() => Volatre()}><View style={styles.btnArea}><Image source={require('../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>{info[route.params?.indice].nome}</Text>
                 
               </View>
               
            </View>
            </View>
         
         <Modal visible={visivel} animationType="fade">
         
         <View style={styles.borda}>
         <ImageBackground source={info[route.params?.indice].fundo} style={styles.imgD42}>
        <View style={styles.brnArea2}>
            <TouchableOpacity onPress={() => voltar()}><View style={styles.btnArea}><Image source={require('../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>Historia</Text>
                 
               </View>
               </View>
            </View>
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}><View style={styles.view}><Text style={styles.btnTexto3}>{info[route.params?.indice].sobre}</Text></View></View>
         </ImageBackground>
          </View>
          
          </Modal>
          
          <Modal visible={visivel2} animationType="fade">
         <View style={styles.borda}>
         <ImageBackground source={info[route.params?.indice].fundo} style={styles.imgD42}>
        <View style={styles.brnArea2}>
            <TouchableOpacity onPress={() => voltar()}><View style={styles.btnArea}><Image source={require('../../../assets/1486348526-arrow-back-backwards-repeat-previous_80453.png')} style={styles.imgD22}></Image></View></TouchableOpacity>
            <View style={styles.botao2}  >
               <View style={styles.btnArea}>
                 <Text style={styles.btnTexto}>{info[route.params?.indice].NomeFundador}</Text>
                 
               </View>
               </View>
              
            </View>
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <View style={styles.imagems}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {info[route.params?.indice].imagem}


            </View>
          </View>
        </View>
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}><View style={styles.view}><Text style={styles.btnTextoFundador}>{info[route.params?.indice].fundador}</Text></View></View>
         </ImageBackground>
          </View>
          </Modal>
        
          
            
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={()=>mesdia()} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Historia</Text> </View>
                 
               </View>
               </TouchableOpacity>
              
               </View>
               <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
            <TouchableOpacity style={styles.botao} onPress={()=>mesdia2()} >
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
               <View style={styles.btnArea}>
               
               
               
                 
                 <Text style={styles.btnTexto2}>Fundador</Text> </View>
                 
               </View>
               </TouchableOpacity>
              
               </View>
               </ImageBackground>
            </View>
            );
        }