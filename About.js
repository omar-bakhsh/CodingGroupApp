import React, { Component,useState } from 'react';

import { StyleSheet,Text,Image,View,Button,TouchableOpacity,Alert,AsyncStorage,TextInput,Linking} from 'react-native';



 import {createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';



export default function About() {


 return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#000' }}>

      <Image source={require('./group3.png')} 
      style={{flex: 1,
              width:'100%',
              borderRadius:10,
              marginTop:20,
                                                    height: null ,marginTop:0,
                                                       }} />
        
        <Text style={{
                      height:'50%',
                      justifyContent: 'center',
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: '#500',
                      backgroundColor: '#000', 
                      color:'#fff',
                      padding:5,
                      marginLeft: 20,
                      marginRight:20,
                      marginTop: 20,
                      fontSize:25,}}
                      >            About Coding Group  {"\n"} {"\n"}

                      مجموعة تهتم في التطوير الاعضاء في مجال علوم الحاسب وبناء مشاريع برمجية والمشاركة اهتمامات التقنية ..👨🏼‍💻👩🏼‍💻   
                      NotForProfitsForPeople#
                       {"\n"}

                     </Text>
                      <Text onPress={()=>{Linking.openURL('https://api.whatsapp.com/send?phone=00966547588252&text=I%27m%20interested%20in%20join%20coding%20Group%20!&source=&data=');}}
                       style={{marginTop:10,marginBottom:10,backgroundColor: '#fff',color:'#000',width:160,height:30, fontSize: 12,borderRadius: 25,fontSize: 15,}}>             join To Group         </Text>
                      

                      </View>
      
    );

}





















