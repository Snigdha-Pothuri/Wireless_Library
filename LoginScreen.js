import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,Alert,KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase';
export default class LoginScreen extends React.Component {
    constructor (){
        super();
        this.state={
            emailid : "",
            password:""
        }
    }
    Login= async(email,password)=>{
     if(email&& password){
       try{
           const response = await firebase.auth().signInWithEmailAndPassword(email,password)
           if(response){
               this.props.navigation.navigate("Transaction")
           }
     }
     catch(error){
      switch(error.code){
          case "auth/user-not-found":
              Alert.alert("user does not exist")
              console.log("does not exist")
              break ;
      case "auth/invalid-email":
          Alert.alert("incorrect email or password")
      }
     }
    }
    else {
        Alert.alert("enter email-id and password")
    }
}
    render (){
        return (
            <KeyboardAvoidingView style={{marginTop:20,alignItems:"center"}}> 
<View>
    <Image source = {require("../assets/booklogo.jpg")}
    style={{width:200,height:200}}
    />
    <Text style={{textAlign : "center",fontSize:30}}> Wireless library </Text>
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
         <TouchableOpacity style={styles.loginButton} onPress={()=>{this.Login(this.state.emailid,this.state.password)}}>
           <Text style={{textAlign:"center"}}> Login </Text> 
         </TouchableOpacity>
     </View>
            </KeyboardAvoidingView>
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
      }
})