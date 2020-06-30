import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

export default class Exercise extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Image
                source={require("../assets/exercise.png")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/exercise1.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/exercise2.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/exercise3.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

            </View>
        )
    }
}