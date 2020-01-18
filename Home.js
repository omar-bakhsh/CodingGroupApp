import React, { Component,useState } from 'react';
/* rn device actions */
import { StyleSheet,Text,View,Button,TouchableOpacity,Alert,AsyncStorage,TextInput} from 'react-native';
/* calende pick pack*/
import CalendarPicker from 'react-native-calendar-picker';
/* navigator screen pack */
 import { createStackNavigator,createAppContainer } from 'react-navigation';
import A from './A'

/*App start*/

export default function App() {





/* state */

const [enterdGoal,setGoal]=useState('');



/* storege use -get-*/

 function log(){

  async () => {
  try {
    const value = await AsyncStorage.getItem(enterdGoal);

    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

}

/* storege use -push-*/

const handleInput = (e)=>{
setGoal(e);
 async (enterdGoal) => {
  try {
    await AsyncStorage.setItem(enterdGoal);
  } catch (error) {
    // Error saving data
  }
};
}



/* return componentes */


return(   


)}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  CgText:{
    color: '#fff',
    justifyContent: 'center' ,
    alignSelf: 'center',
    fontWeight: 'bold', 
    padding: 5,
    fontSize: 22,
    backgroundColor: '#002100',
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 16
  }
});




