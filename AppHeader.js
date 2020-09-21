import React from 'react';
import {Text, StyleSheet , View} from 'react-native';

class AppHeader extends React.Component{
    render(){
        return(
            <View
            style={styles.container}>

                <Text
                style={styles.heading}>
                    Story Hub
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        marginTop:0,
        alignContent:'center',
        paddingTop:40
    },
    heading:{
        marginLeft:120,
        fontSize:35,
        fontWeight:'bold'
    }
});

export default AppHeader;