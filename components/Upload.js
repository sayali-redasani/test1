import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../assets/colors/Colors';

const Upload = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center',color: Colors.black }}>Upload the documents.</Text>
    </View>
  )
}

export default Upload

const styles = StyleSheet.create({
container:{
  justifyContent: 'center',
  backgroundColor: '#000000',
  height: '100%',
},
})