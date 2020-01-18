
import React, { Component,useState } from 'react';
 import {createAppContainer } from 'react-navigation';
/* rn device actions */
import { StyleSheet,Text,View,Button,Image,TouchableOpacity,Alert,AsyncStorage,TextInput} from 'react-native';
/* calende pick pack*/

/* navigator screen pack */
import { createStackNavigator } from 'react-navigation-stack';
import About from './About';
import Calender from './Calender';
import AppStyles from './styles';
import Profile from './Profile';
// Importing the screens


 

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppStyles.colour.background
    }
});



class Home extends React.Component {

  render() {
    return (
      <View style={AppStyles.homeV}   >

        <Image source={require('./cg.jpg')} 
        style={AppStyles.backgroundImage}

        />
  <Button color="#4fdb09" onPress={() =>Alert.alert('CopyRight : © Coding Group .                     {G-h: omar-bakhsh }') } title='Developer'/>
       <View style={AppStyles.NvbtnV}>
       
          <Text>
                    {"\n"}

            </Text>

        

            <Button
            color="#4fdb09"
          title="Members"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
    


          <Text>
                    {"\n"}

            </Text>

            <Button
            color="#4fdb09"
          title="Calender"
          onPress={() => this.props.navigation.navigate('Calender')}
        />

         <Text>
                    {"\n"}

            </Text>

           <Button
           style={AppStyles.nvbtn}
          title="About"
          color="#4fdb09"
          onPress={() => this.props.navigation.navigate('About')}
        />

        </View>
     
     </View>
    );
  }
}


const AppNavigator = createStackNavigator({
    Home: {screen: Home},
     
     Calender : {screen: Calender},
      Profile: {screen: Profile},
      About: {screen: About},
    },
    {
        // Specifing Initial Screen
        initalRoute: 'Home'
    }
);

const App = createAppContainer(AppNavigator);

export default App;