import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,Alert,KeyboardAvoidingView} from 'react-native';
import db from "../config"
import * as firebase from 'firebase';
export default class WelcomeScreen extends React.Component {
    constructor (){
        super();
        this.state={
            emailid : "",
            password:""
        }
    }
    userLogin= async(emailid,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailid,password)
    .then(()=>{
        return Alert.alert("Succesfully Logged In")
    })
    .catch((error)=>{
      var errorCode = error.code
      var errorMessage = error.message
      return Alert.alert(errorMessage)
    })
}
userSignUp= async(emailid,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailid,password)
    .then((response)=>{
        return Alert.alert("User Added Succesfully")
    })
    .catch((error)=>{
      var errorCode = error.code
      var errorMessage = error.message
      return Alert.alert(errorMessage)
    })
}
    render (){
        return (
           
<View style={styles.container}>
   <View>
    <Text style={styles.title}> Book Santa </Text>
   
     </View>
     <View>
    <TextInput 
        style={styles.inputBox}
        placeholder="abc@example.com" 
        keyboardType="email-address"
        onChangeText={text=>this.setState({
          emailid : text
        })}
        />
         <TextInput 
        style={styles.inputBox}
        placeholder="Enter Password" 
       secureTextEntry = {true}
        onChangeText={text=>this.setState({
          password : text
        })}
        />
     </View>
     <View>
         <TouchableOpacity style={styles.loginButton} onPress={()=>{this.userLogin(this.state.emailid,this.state.password)}}>
           <Text style={{textAlign:"center"}}> Login </Text> 
         </TouchableOpacity>

         <TouchableOpacity style={styles.loginButton} onPress={()=>{this.userSignUp(this.state.emailid,this.state.password)}}>
           <Text style={{textAlign:"center"}}> Sign Up </Text> 
         </TouchableOpacity>
     </View>
         </View>
        )
    }
}
const styles = StyleSheet.create({
    loginButton : {
     width : 90,
      height : 40,
      alignItems : "center",
      marginTop:20,
      padding:5,
      borderRadius:10,
      borderWidth : 2
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
      },
      container : {
          flex:1,
          backgroundColor : "pink"

        }
})