import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

export default class Yoga extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Image
                source={require("../assets/yoga.jpg")}
                style={{width:200, height: 200}}/>
                </View>

                <View>
                <Image
                source={require("../assets/yoga2.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/yoga3.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>
            </View>
        )
    }
}