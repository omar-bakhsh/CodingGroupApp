import React, { Component,useState } from 'react';
/* rn device actions */
import { StyleSheet,Text,View,Button,TouchableOpacity,Alert,AsyncStorage,TextInput} from 'react-native';
/* calende pick pack*/
import CalendarPicker from 'react-native-calendar-picker';
/* navigator screen pack */
  import { createAppContainer } from 'react-navigation';
import { createStackNavigator,createStackNavigator } from 'react-navigation-stack';




/*App start*/

export default function Calender() {





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
      /* Header - calnder*/
      <View style={styles.container}>
                <Text style={styles.CgText}>Coding Group Calender</Text>
        <CalendarPicker
          
        />
 
      {/*body - Date appare - note inpot  */}

        <View>
          <Text style={{}}>  التاريخ  المحدد : </Text>
          <TextInput placeholder="write a Task Here" onChangeText={handleInput} ></TextInput>
        </View>


        {/* footer - button save - botton show */}
        <View style={{backgroundColor: '#0f0',justifyContent: 'center',alignSelf: 
        'center',width:100,padding: 5, borderWidth: 1, borderRadius: 16,borderColor:'#fff'}}>
        <TouchableOpacity ><Text style={{color: '#fff',fontSize: 14,}}>Save Change</Text></TouchableOpacity>
     </View> 


<View style={{backgroundColor: '#f00',justifyContent: 'center',alignSelf: 
        'center',width:100,padding: 5, borderWidth: 1, borderRadius: 16,borderColor:'#fff'}}>
        <TouchableOpacity onPress={log} ><Text style={{color: '#fff',fontSize: 14,}}>show</Text></TouchableOpacity>
       </View>
       <Text style={{color: '#fff',fontSize: 14,}}>{enterdGoal}</Text>
         <Text>Home Screen</Text>
           <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('About')}
        />
     </View>


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
























