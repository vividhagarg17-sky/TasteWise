import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'; 

const Plans = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select a Plan</Text>
      <View style={styles.plansContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => router.replace('/digitalplan')}>
          <Text style={styles.plantext}>Digital Plan - Free of Cost</Text> 
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.plantext}>Smart Plan - Just at ₹ 49 / month</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Plans

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 150,
    backgroundColor: '#fcf4a3',
  }, 
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50, 
  },
  plansContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 300,
  },
  plantext: {
    fontSize: 18,
    marginVertical: 10,
    backgroundColor: '#3b8132',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 100,
    color: '#fff',
    width: 300,
    height: 150,
    textAlignVertical: 'center',
    
  },
})