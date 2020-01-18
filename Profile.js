import React, { Component,useState } from 'react';

import { StyleSheet,Text,Image,View,Button,TouchableOpacity,Alert,TextInput,TouchableHighlight} from 'react-native';

import Faisl from './Members/Faisl';
import Abdullah from './Members/Abdullah';
import Omar from './Members/Omar';
 import {createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';




class Prfile extends React.Component {

  render() {
    return (    <View style={styles.V}>
    <Text style={styles.HeaderTxt}> Members    {"\n"}</Text>


     <View style={styles.Vw}>
 <TouchableHighlight style={styles.button}   onPress={() => this.props.navigation.navigate('Omar')} ><Text style={styles.txt}>Omar</Text></TouchableHighlight>
    </View>

    <View style={styles.Vw}>
 <TouchableHighlight style={styles.button}   onPress={() => this.props.navigation.navigate('Faisl')} ><Text style={styles.txt}>Faisl</Text></TouchableHighlight>
    </View>

     <View style={styles.Vw}>
 <TouchableHighlight style={styles.button}   onPress={() => this.props.navigation.navigate('Abdullah')} ><Text style={styles.txt}>Abd</Text></TouchableHighlight>
    </View>
           </View>  
    );}}







const styles = StyleSheet.create({
  HeaderTxt:{
     color:'#fff',
     

  },
  V:{
        flex: 1,
      backgroundColor: '#000',
      flexDirection: 'column' ,
      width: '100%',
      height: '100%',
      margin: 0,
      alignItems: 'center',
  },
Vw:{
      flex: 1,
      backgroundColor: '#000',
      flexDirection: 'row' ,
      alignItems: 'center' ,
      color:'#fff',

  },
  txt:{
    color:'#fff',

  },
  button:{
    backgroundColor: '#500',
    width: 50,
    height: 50,
    borderRadius: 50/2,
    justifyContent: 'center',
   padding: 7.5,

  }
  
});




const AppNavigator = createStackNavigator({
    Prfile: {screen: Prfile},
      Omar: {screen: Omar},
     Faisl: {screen: Faisl},
     Abdullah: {screen: Abdullah},
    },
    {
        // Specifing Initial Screen
        initalRoute: 'Home'
    }
);

const pages = createAppContainer(AppNavigator);

export default pages;







