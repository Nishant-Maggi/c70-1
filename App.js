import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStorySceen from  './screens/ReadStoryScreen';

export default class App extends React.Component{
  render(){
      return(          
          <AppContainer/>
      );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStoryScreen},
  Read: {screen: ReadStorySceen}
},
{
  defaultNavigationOptions:()=>{
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;

      if(routeName==="Write"){
        return(
          <Image
          source={require("./Images/read.png")}
          style={{width:20 ,height:20}}/>
        )
      }
      else if(routeName==="read"){
        return(
          <Image
          source={require("./Images/write.png")}/>
        )
      }
    }
  }
});

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
