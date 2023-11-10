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
    borderColor:'#a45103',
    borderWidth: 5,
    padding: 2,
    borderRadius: 10,
    backgroundColor: '#a45103',
    width:'100%',
    height:'100%',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 1,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  imgD:{
    height:50,
    width:350,
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
  imgD3:{
    height:'100%',
    width:'60%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'stretch',
 
    marginTop:7,
    borderColor:'#fff',
    
    marginBottom:5,
  },
  imgD4:{
    height:'100%',
    width:'100%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'cover',
    borderRadius:10,
    marginTop:7,
    borderColor:'#fff',
    borderRadius:25,
    overflow:'hidden',
    marginBottom:5,
  },
  imgD42:{
    height:'100%',
    width:'100%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'cover',
   
  },
  txt:{
    fontSize:'16px'
  },
  txt2:{
    fontSize:'30px',
    
  },
  botao:{
    width:'80%',
    height:70,
    borderWidth:2,
    borderColor:'black',
    borderRadius:25,
    margin:10,
    backgroundColor: 'black'
    
  },
  botao2:{
    width:230,
    height:40,
    borderWidth:2,
    borderColor:'black',
    borderRadius:25,
    
    
    
    backgroundColor: 'black'
  },
  btnArea:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  brnArea2:{
    flex:2,
   
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  btnTexto:{
    fontFamily:'Walter',
    fontSize:18,
    fontWeight:'bold',
    backgroudColor: 'black',
    color:'#f1a223',
    
  
  },
  btnTexto2:{
    margin:50,
    fontSize:18,
    fontWeight:'bold',
    backgroudColor: 'black',
    color:'black',
    
  
  },
  btnTexto22:{
    margin:50,
    fontSize:18,
    fontWeight:'bold',
    backgroudColor: 'black',
    color:'black',
    position: 'absolute',
    top:'-80%',
    
  },
  btnTexto222:{
    margin:50,
    fontSize:18,
    fontWeight:'bold',
    backgroudColor: 'black',
    color:'white',
    position: 'absolute',
    top:'-80%',
    
  },

  });