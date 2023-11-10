import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgD:{
      height:350,
      width:350,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 10,
      resizeMode: 'stretch',
      borderWidth:3,
      marginTop:7,
      borderColor:'#fff',
      borderRadius:130,
      marginBottom:5,
    },
    borda: {
      borderColor:'black',
      borderWidth: 7,
      
      borderRadius: 10,
      backgroundColor: 'white',
      width:'100%',
      height:'100%',
    },
  });