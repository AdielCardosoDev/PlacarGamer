import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, StatusBar, Alert, } from 'react-native';

export default function App() {
  //Construção das Variaveis play1 
  const [ play1, setPlay1 ] = useState(0);  

  //Construção das Variaveis play2 
  const [ play2, setPlay2 ] = useState(0); 
  
  // função Ponto + play1
  function pontoPlay1(){
    setPlay1(parseInt(play1) +1  )
  }

  // função Ponto + play2
  function pontoPlay2(){
    setPlay2(parseInt(play2) +1)    
  }
  
   // função Ponto - play2
   function  menosPlay1(){
    setPlay1(parseInt(play1) - 1);
    
  }

  // função ponto - play2 
   function menosPlay2(){
    setPlay2(parseInt(play2) - 1);
    
  }

  

  // função terminal partida
  function finalizar(){
    if(play1 > play2){
      Alert.alert("Play 1 Ganhou! ")
    }else if(play1 == play2){
      Alert.alert("Empate!")
    }else{
      Alert.alert("Play 2 Ganhou!")
    }
    zerarPlacar();
  }
  // função zerar placar
  function zerarPlacar(){
    setPlay1(0);
    setPlay2(0);
  }

  
  return (
    <View style={styles.container}>

      <StatusBar barStyle='default' backgroundColor='#212121' />

      <Image  
      source={require('../placargamer/assets/controller.png')}
      style={styles.img} />
      <Text style={styles.title} >Placar Gamer</Text>
      
      <View style={styles.Alian}>
      <TextInput style={styles.play} placeholder='PLAY1' placeholderTextColor='#FF5722' maxLength={7} />
      <View/>
      
      <TextInput style={styles.play} placeholder='PLAY2' placeholderTextColor='#FF5722' maxLength={7}/>      
      </View>

      <View style={styles.alianRes}>
      <Text style={styles.res} >{play1}</Text>
      <View/>
      <View style={styles.alianRes2}></View>
      <Text style={styles.res} >{play2}</Text>
      </View>

      <View style={styles.alingBtn} >        
        
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
        onPress={pontoPlay1}         
        >
          <Text style={styles.btnText} >+</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
        onPress={menosPlay1}         
        >
          <Text style={styles.btnText} >-</Text>
        </TouchableOpacity>        
       
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
        onPress={pontoPlay2} 
        >
          <Text style={styles.btnText} >+</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
        onPress={menosPlay2}         
        >
          <Text style={styles.btnText} >-</Text>
        </TouchableOpacity>

        
       
      </View>
      

        <TouchableOpacity style={styles.zerar} activeOpacity={0.7}
        onPress={zerarPlacar}
        >      
        <Text style={styles.btnzerar} >Zerar Placar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.zerar} activeOpacity={0.7}
        onPress={finalizar}
        >      
        <Text style={styles.btnzerar} >Termina Partida</Text>
        </TouchableOpacity>

        <Text style={styles.dicas} >Dicas !</Text>
        <Text style={styles.subDi} >DIGITE O NOME DO PLAY1 E PLAY2</Text>
        <Text style={styles.subDi} >JOGUE COM MODERAÇÃO :)</Text>        


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent:'center'    
  },
  img:{
    width:100,
    height:100,    
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
    marginTop:30,
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
    width:40,
    height:40,
    backgroundColor: '#fff',
    borderRadius:4,
    margin:15,
    marginTop:0,
    justifyContent:'center', 
    marginHorizontal:14

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
    margin:5,
    
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
    color:'#FF5722',
    padding:50
  },
  dicas:{
    marginTop:20,
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },
  subDi:{
    marginTop:5,
    color:'#fff',

  },
  modal:{
    flex:1,
    backgroundColor:'#212121',
    alignItems:'center',
    justifyContent:'center',
    padding:50,
    
  },
  Sob:{
    color:'#fff',
    fontSize:35,
    fontWeight:'bold',
    marginTop:10

  },
  caixa:{
    backgroundColor:'#FF5722',
    width:'120%',
    height:280,
    marginTop:30,
    borderRadius:4,
    alignItems:'center'
  },
  P:{
    color:'#000',
    fontSize:18,
    margin:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  P2:{
    fontSize:15,
    fontWeight:'bold',
    color:'#fff',
  },
  close:{
    marginLeft:10,
    marginTop:20,
    flexDirection:'row', 
    
  },
  
  

});
