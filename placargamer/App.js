import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StatusBar, Alert, Modal, } from 'react-native';
import styles from './styles'; 

export default function App(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#ffffff' />
            
            <Image source={require('../placargamer/assets/controller.png')} style={styles.img} />

            <Text style={styles.title} >Placar Gamer</Text>

            <View style={styles.card}>

                <View style={styles.bloco1} >

                    <TextInput style={styles.play} placeholder='PLAY 1' placeholderTextColor='#123743' maxLength={7} />
                    <Text style={styles.res} >01</Text>
                    
                    <View style={styles.cont}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
                        //onPress={pontoPlay1}         
                        >
                          <Text style={styles.btnText} >+</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
                        //onPress={menosPlay1}         
                        >
                          <Text style={styles.btnTextm} >-</Text>
                        </TouchableOpacity>
                    </View>
                     
                </View>

                 <View style={styles.bloco1} >

                    <TextInput style={styles.play} placeholder='PLAY 2' placeholderTextColor='#123743' maxLength={7} />
                    <Text style={styles.res} >01</Text>
                    
                    <View style={styles.cont}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
                        //onPress={pontoPlay2}         
                        >
                          <Text style={styles.btnText} >+</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} activeOpacity={0.7}
                        //onPress={menosPlay2}         
                        >
                          <Text style={styles.btnTextm} >-</Text>
                        </TouchableOpacity>
                    </View>
                     
                </View>

            </View>
        </View>
    )
}

