import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

export default class Swimming extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Image
                source={require("../assets/swimming.png")}
                style={{width:200, height: 200}}/>
                </View>

                <View>
                <Image
                source={require("../assets/swimming1.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/swimming2.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/swimming3.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>
            </View>
        )
    }
}