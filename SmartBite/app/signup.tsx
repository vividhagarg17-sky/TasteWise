import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'
import { router } from 'expo-router';



const Signup = () => {
    const [name,setname] = React.useState('');
    const [email,setemail] = React.useState('');
    const [password,setpassword] = React.useState('');
    const [confirmPassword,setconfirmPassword] = React.useState('');

const handleSignup = () => {
    // Here we will use Firebase.
    console.log('User Info:', { name, email, password });
}
return (
    <View style={styles.container}>
       

        <Image source={require("../assets/images/signup.jpg")} style={styles.logo} />

        <TextInput placeholder="Name"
         style={styles.input}
         value={name}
         onChangeText={setname} />

        <TextInput placeholder="Email"
         style={styles.input}
         value={email}
         onChangeText={setemail}
         keyboardType="email-address"
         autoCapitalize="none"
         autoCorrect={false} />

         <TextInput placeholder="Password"
         style={styles.input}
         value={password}
         onChangeText={setpassword}
         secureTextEntry={true} />

         <TextInput placeholder="Confirm Password"
         style={styles.input}
         value={confirmPassword}
         onChangeText={setconfirmPassword}
         secureTextEntry={true} />
        
        <TouchableOpacity onPress={() => router.replace("/login")}>
            <Text style={styles.loginText}>Already have an account? Log In</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => { handleSignup(); router.replace("/plans"); }}>
            <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    logo : {
    width: '100%',
    height: 500,
    marginBottom: 50,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#f0f0f0b9',
    },
    buttonText: {
        fontSize:18, 
     color:"#ffff", 
     backgroundColor: "#3b8132",
     padding: 15,
        borderRadius: 5,
        marginTop: 40,
        textAlign: 'center',
        width: 200,
        alignSelf: 'center',
    },
    loginText: {
        fontSize: 16,
        marginTop: 20,
        textAlign: 'right',
    }
})

export default Signup;

