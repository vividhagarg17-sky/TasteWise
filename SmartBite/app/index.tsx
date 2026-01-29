import React, { useEffect } from "react";
import { Text, View, StyleSheet,Image} from "react-native";
import { router } from "expo-router";

const Index = () => {


useEffect(() => {
  const timer = setTimeout(() => {
    router.replace("/home"); // Navigate to the home screen after 10 seconds
  }, 10000);

  return () => clearTimeout(timer); // Clear the timer if the component unmounts
}, []);


  return (
    <View style = {styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Text style = {styles.text}>SmartBite</Text>
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
});

export default Index;
