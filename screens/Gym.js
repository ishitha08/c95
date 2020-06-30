import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

export default class Gym extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Image
                source={require("../assets/gym.png")}
                style={{width:200, height: 200}}/>
                </View>

                <View>
                <Image
                source={require("../assets/fitness1.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/fitness2.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/fitness3.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

            </View>
        )
    }
}