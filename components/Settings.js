import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../assets/colors/Colors';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center',color: Colors.black}}>Settings.</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
container:{
  justifyContent: 'center',
  backgroundColor: '#000000',
  height: '100%',
},
})