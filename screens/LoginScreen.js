import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView,Modal} from 'react-native';
import * as firebase from 'firebase'
import db from '../config';
import { ScrollView } from 'react-native-gesture-handler';
export default class LoginScreen extends React.Component {

    constructor(){
        super();
        this.state={
          emailId : '',
          password: '',
          first_name:'',
          last_name:'',
          contact:'',
          address:'',
          confirm_password:''
        }
      }
    
      login=async(email,password)=>{
        this.props.navigation.navigate('HomeScreen')
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate('HomeScreen')
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                Alert.alert("user dosen't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                Alert.alert('incorrect email or password')
                console.log('invaild')
                break
            }
          }
        }
        else{
            Alert.alert('enter email and password');
        }
      }
      userSignUp = (emailId, password,confirmPassword) =>{
        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        }else{
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then(()=>{
            db.collection('users').add({
              first_name:this.state.firstName,
              last_name:this.state.lastName,
              contact:this.state.contact,
              email_id:this.state.emailId,
              address:this.state.address,
              password:this.state.password,
              confirm_password:this.state.confirm_password,
             isBookRequestActive:false
            })
            return  Alert.alert(
                 'User Added Successfully',
                 '',
                 [
                   {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
                 ]
             );
          })
          .catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          });
        }
      }
      
  showModal=()=>{
    return(
    <View>
      <Modal>
        <ScrollView>
          <KeyboardAvoidingView>
          <TextInput
          style={styles.loginBox}
          placeholder="first name"
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              first_name: text
            })
          }}
          value = {this.state.first_name}
        />
         <TextInput
          style={styles.loginBox}
          placeholder="last name"
          maxLength = {8}
          onChangeText={(text)=>{
            this.setState({
              last_name: text
            })
          }}
          value = {this.state.last_name}
        />
         <TextInput
          style={styles.loginBox}
           placeholder="contact"
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value = {this.state.contact}
        />
         <TextInput
          style={styles.loginBox}
          multiline
          maxLength = {1000}
          placeholder="address"
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value = {this.state.address}
        />
            <TextInput
          style={styles.loginBox}
          placeholder="abc@example.com"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
          value = {this.state.emailId}
        />
         <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
          value = {this.state.password}
        />
         <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="confirm Password"
          onChangeText={(text)=>{
            this.setState({
              confirm_password: text
            })
          }}
          value = {this.state.confirm_password}
        />
          <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
          onPress={()=>{this.userSignUp(this.state.emailId ,this.state.password,this.state.confirm_password)}}>
            <Text style={{textAlign:'center'}}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
          onPress={()=>{this.props.navigation.navigate(LoginScreen)}}>
            <Text style={{textAlign:'center'}}>Cancel</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </Modal>
    </View>
    )
  }
  render(){
      return(
        <View>
        {this.showModal()}
       
        <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
        <View>
          <Image
            source={require("../assets/fitness.jpg")}
            style={{width:200, height: 200}}/>
          <Text style={{textAlign: 'center', fontSize: 30}}>Fitness Pro</Text>
        </View>
        <View>
        <TextInput
          style={styles.loginBox}
          placeholder="abc@example.com"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        </View>
        <View>
          <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
          onPress={()=>{this.login(this.state.emailId ,this.state.password)}}>
            <Text style={{textAlign:'center'}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
           style={styles.button}
           onPress={()=>this.setState({ isModalVisible:true})}
           >
           <Text style={styles.buttonText}>SignUp</Text>
         </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
      </View>

      )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:
  {
  width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10
  }

})
