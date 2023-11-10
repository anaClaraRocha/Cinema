import { withSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
   
  container: {
    flex: 1,
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
    borda: {
    borderColor:'black',
    borderWidth: 5,
    padding: 2,
    borderRadius: 10,
    backgroundColor: '#59787a',
    width:'100%',
    height:'100%',
  },
  imgD42:{
    height:'100%',
    width:'100%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'cover',
   
  },
  imgD:{
    height:250,
    width:250,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'stretch',
   
    marginTop:7,
    borderColor:'#fff',
    
    marginBottom:5,
  },
  imgD2:{
    height:40,
    width:40,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'stretch',
    margin:30,
    marginTop:7,
    borderColor:'#fff',
    
    marginBottom:5,
  },
  
  txt:{
    fontSize:'16px'
  },
  txt2:{
    fontSize:'30px',
    
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'black',
    borderRadius:25,
    margin:10,
  
    backgroundColor: 'black',
  },
  botao2:{
    width:230,
    height:40,
    borderWidth:5,
    borderColor:'black',
    borderRadius:25,
    marginTop:'20px',
    
    
    backgroundColor: 'black',
  },
  btnArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color:'black'
  },
  brnArea2:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    color:'black'
  },
  btnTexto:{
    
    fontSize:18,
    fontWeight:'bold',
    backgroudColor: 'black',
    color:'#f1a223',
    
  
  },
  btnTexto2:{
    
    fontSize: 16, fontWeight: 'bold', textAlign: 'center' 
    
  
  },
  VoltarTexto2:{
    
    textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold'
    
  
  },
  });