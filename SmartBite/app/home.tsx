import React, { useEffect } from "react";
import { Text, View, StyleSheet,Image,TouchableOpacity} from "react-native";
import { router } from "expo-router";

const Index = () => {

  return (
    <View style = {styles.container}>
        <Text style = {styles.text}>Welcome to SmartBite!</Text>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.start}>Let's Start</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCF4A3",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3b8132",
  },
  logo : {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  start: {
    fontSize:18, 
    color:"#ffff", 
    backgroundColor: "#3b8132",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  }
});

export default Index;
