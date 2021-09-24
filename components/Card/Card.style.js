import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container:{
      margin:5,
      flex:1,
      backgroundColor:"#ebebeb",
  
      },
    image:{
      flex:1,
      height: Dimensions.get("window").height/2.9,
      width: Dimensions.get("window").width/2.4,
      resizeMode: 'contain' ,
      marginRight:50,
      
    },
    card: {
      margin:10,
      
      borderRadius:10,
    },
    card_title:{
      fontSize:16,
      fontWeight:'bold',
    },
    card_text:{
      color:'grey',
      fontWeight:'bold',
    },
    no_stock:{
      color:'red',
      fontWeight:'bold',
      fontSize:14,
    }
  });

export default styles;