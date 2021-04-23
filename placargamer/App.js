import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StatusBar, Alert, Modal, } from 'react-native';
import styles from './styles'; 

export default function App(){
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
      Alert.alert(`PLAY 1 GANHOU!`);
    }else if(play1 == play2){
      Alert.alert("EMPATE!")
    }else{
      Alert.alert("PLAY 2 GANHOU!");
    }
    zerarPlacar();
  }
  // função zerar placar
  function zerarPlacar(){
    setPlay1(0);
    setPlay2(0);
  }

  const [inPlay, setInplay] = useState('');
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#ffffff' />
            
            <Image source={require('../placargamer/assets/controller.png')} style={styles.img} />

            <Text style={styles.title} >Placar Gamer</Text>

            <View style={styles.card}>

                <View style={styles.bloco1} >

                    <TextInput style={styles.play} placeholder='PLAY 1' placeholderTextColor='#123743' maxLength={7} 
                    onChangeText={(val) => setInplay(val)}
                    />
                    <Text style={styles.res} >{play1}</Text>
                    
                    <View style={styles.cont}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
                        onPress={pontoPlay1}         
                        >
                          <Text style={styles.btnText} >+</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
                        onPress={menosPlay1}         
                        >
                          <Text style={styles.btnTextm} >-</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                
                <View style={styles.x}>
                  <Text style={styles.xTex}>X</Text>
                </View>

                 <View style={styles.bloco1} >

                    <TextInput style={styles.play} placeholder='PLAY 2' placeholderTextColor='#123743' maxLength={7} />
                    <Text style={styles.res} >{play2}</Text>
                    
                    <View style={styles.cont}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
                        onPress={pontoPlay2}         
                        >
                          <Text style={styles.btnText} >+</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
                        onPress={menosPlay2}         
                        >
                          <Text style={styles.btnTextm} >-</Text>
                        </TouchableOpacity>
                    </View>
                     
                </View>

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
    )
}

