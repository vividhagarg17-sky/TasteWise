import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

const DigitalPlan = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>DigitalPlan</Text>
      <Text style = {styles.plantext}>{'\u2022'} Stealth Swaps</Text>
      <Text style = {styles.plantext}>{'\u2022'} Cafe Suggestions </Text>
      <Text style = {styles.plantext}>{'\u2022'} HealthCoins</Text>
      <Text style = {styles.plantext}>{'\u2022'} Rewards: badges; certificates, digital prizes.</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.digitalbtn}>
        <Text style={styles.btntext} onPress={() => router.replace("/dashboard")}> Want to choose Digital Plan? Click here</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DigitalPlan

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center', 
  paddingTop: 50,
  backgroundColor: '#fcf4a3',
},
text: { 
  fontSize: 40,
  color: '#fff',
  marginBottom: 10,
  backgroundColor: '#3b8132',
  padding: 10,
  borderRadius: 5,
},
plantext: {
  fontSize: 18,
  marginVertical: 10,
  color: '#fff',
  textAlign: 'center',
  backgroundColor: '#3b8132',
  padding: 10,
  borderRadius: 10,
  width: 300,
  height: 70,
  textAlignVertical: 'center',
},
digitalbtn: {
  marginTop: 300, 
  backgroundColor: '#49bba8', 
  padding: 10,
   borderRadius: 5,
},
btntext: {
  color: '#fff',
   fontSize: 18,
}
})