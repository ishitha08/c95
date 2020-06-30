import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

export default class Zumba extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Image
                source={require("../assets/zumba.jpeg")}
                style={{width:200, height: 200}}/>
                </View>

                <View>
                <Image
                source={require("../assets/zumba1.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/zumba2.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>

                <View>
                <Image
                source={require("../assets/zumba3.jpeg")}
                style={{width:200, height: 200}}/>
                <Text></Text>
                </View>
            </View>
        )
    }
}