import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image  
      source={require('../placargamer/assets/controller.png')}
      style={styles.img} />
      <Text style={styles.title} >Placar Gamer</Text>

      <View style={styles.Alian}>
      <Text style={styles.play} >Play 01</Text>
      <Text style={styles.play} >Play 02</Text>      
      </View>

      <View style={styles.alianRes}>
      <Text style={styles.res} >0</Text>
      <Text style={styles.res} >0</Text>
      </View>

      <View style={styles.alingBtn} >
        <TouchableOpacity style={styles.btn} activeOpacity={0.7} >
          <Text style={styles.btnText} >+1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} activeOpacity={0.7} >
          <Text style={styles.btnText} >+1</Text>
        </TouchableOpacity>
      </View>

        <TouchableOpacity style={styles.zerar} activeOpacity={0.7} >
          <Text style={styles.btnzerar} >Zerar Placar</Text>
        </TouchableOpacity>

        <TouchableOpacity  activeOpacity={0.7} >
          <Text style={styles.sobre} >Sobre</Text>
        </TouchableOpacity>


      





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',    
  },
  img:{
    width:200,
    height:200,
    marginTop:13,
  },
  title:{
    fontSize:40,
    fontWeight:'bold',
    color:'#FF5722'
  },
  play:{
    color:'#FF5722',
    fontSize:30,
    fontWeight:'bold',
    marginTop:40,
    margin:20,
       
  },
  Alian:{
    flexDirection:'row',
      
  },
  res:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:0,
    margin:20,
    color:'#fff',
    backgroundColor:'#D32F2F',
    width:100,
    height:45,
    textAlign:'center',
    justifyContent:"center",  
    borderRadius:4  
  },
  alianRes:{
    flexDirection:'row',
  },
  alingBtn:{
    flexDirection:'row',
  },
  btn:{
    width:100,
    height:45,
    backgroundColor: '#fff',
    borderRadius:4,
    margin:20,
    marginTop:0,
    justifyContent:'center',  

  },
  btnText:{
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    color:'#D32F2F'
  },
  zerar:{
    width:"60%",
    height:40,
    backgroundColor:'#D32F2F',
    borderRadius:4,
    justifyContent:'center',   
    
  },
  btnzerar:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
  },
  sobre:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    padding:150
  },
    
  

});
