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
    borderRadius: 10,
    backgroundColor: 'white',
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
  imgD42:{
    height:'100%',
    width:'100%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'cover',
   
  },
  imgD22:{
    height:20,
    width:20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'stretch',
   margin:20,
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
    
    marginBottom:5,
  },
  txt:{
    fontSize:'16px'
  },
  txt2:{
    fontSize:'30px',
    
  },
  botao:{
    width:'30%',
    height:'80%',
    borderWidth:2,
    borderColor:'black',
    borderRadius:10,
    margin:20,
    backgroundColor: 'black'
    
  },
  botao2:{
    width:230,
    height:40,
    borderWidth:5,
    borderColor:'black',
    borderRadius:25,
    
    
    
    backgroundColor: 'black'
  },
  btnArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
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
    color:'#f1a223',
    
  
  },

  });