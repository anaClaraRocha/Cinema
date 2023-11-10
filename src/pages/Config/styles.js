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
    borderWidth: 7,
    
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
    height:60,
    width:60,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'stretch',
   
    marginTop:7,
    borderColor:'#fff',
    
    marginBottom:5,
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
    width:'40%',
    height:'30%',
    borderWidth:2,
    borderColor:'black',
    borderRadius:10,
    margin:20,
    backgroundColor: '#f1a223'
    
  },
  imagems:{
    width:'60%',
    height:'100%',
    borderWidth:2,
    borderColor:'black',
    borderRadius:10,
    marginTop:'10px',
    backgroundColor: 'black'
    
  },
  botao2:{
    width:230,
    height:50,
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
    marginTop:'20px',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  brnArea22:{
    marginTop:'20px',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  btnTexto:{
    
    fontSize:18,
    fontWeight:'bold',
    backgroudColor: 'black',
    color:'#f1a223',
    
    fontFamily:'Walter',
  },
  btnTexto2:{
    margin:50,
    fontSize:18,
    fontWeight:'bold',
    backgroudColor: 'black',
    color:'black',
    
  
  },
  imgD42:{
    height:'100%',
    width:'100%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    resizeMode: 'cover',
   
  },
  view: {
    justifyContent: 'center',  backgroundColor:'black',
   height:'90%',
   width:'90%',
   borderWidth:2,
   borderColor:'black',
   borderRadius:10,
 },
 btnTexto3:{
   margin:50,
   fontSize:12,
   fontWeight:'bold',
   fontFamily:'Walter',
   color:'#f1a223',
   
 
 },
 btnTextoFundador:{
  margin:50,
  fontSize:10,
  fontWeight:'bold',
  
  color:'#f1a223',
  fontFamily:'Walter',

},

  });