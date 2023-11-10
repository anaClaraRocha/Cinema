import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home/';

import Cadastrar from './src/pages/Cadastrar';

import Estudios from './src/pages/Estudios';

import Disney from './src/pages/Disney';

import AnimaçãoDisney from './src/pages/Disney/Animações/Animação';

import Pixar from './src/pages/Pixar';
import AnimaçãoPixar from './src/pages/Pixar/Animações/Animação';


import Dreamworks from './src/pages/Dreamworks';
import AnimaçãoDreamworks from './src/pages/Dreamworks/Animações/Animação';

import CartoonNetworks from './src/pages/Cartoon Networks';

import Config from './src/pages/Config';

import AnimaçãoCartoonNetworks from './src/pages/Cartoon Networks/Animações/Animação';



const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Century Gothic',
            },    
            headerStyle: {
              backgroundColor: '#gray',
              borderWidth:'5px',
              borderRadius:'10px',
              margin: '10px',
              borderColor:'black',
              fontSize: 16,
            },
            headerTintColor:'Black'
            
          }}
        
        >
          <Stack.Screen name="Home" component={Home}
            options={{
              headerShown: false,
            }}
            />
          
          <Stack.Screen name="Cadastro" component={Cadastrar}
            option={{
              
            }}
          />

          <Stack.Screen name="Estudios" component={Estudios}
            option={{
              
            }}
          />

          <Stack.Screen name="Disney" component={Disney}
            option={{
              
            }}
          /><Stack.Screen name="AnimaçãoDisney" component={AnimaçãoDisney}
          options={{
            headerShown: false,
          }}
          />
        
            <Stack.Screen name="Pixar" component={Pixar}
          options={{
            headerShown: false,
          }}
          />
           <Stack.Screen name="AnimaçãoPixar" component={AnimaçãoPixar}
          options={{
            headerShown: false,
          }}
          />

           <Stack.Screen name="Dreamworks" component={Dreamworks}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="AnimaçãoDreamworks" component={AnimaçãoDreamworks}
          options={{
            headerShown: false,
          }}
          />

          <Stack.Screen name="CartoonNetworks" component={CartoonNetworks}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="AnimaçãoCartoonNetworks" component={AnimaçãoCartoonNetworks}
          options={{
            headerShown: false,
          }}
          />
          
           <Stack.Screen name="Config" component={Config}
          options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
