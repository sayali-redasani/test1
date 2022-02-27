import React from 'react';
import { Dimensions, SafeAreaView, View, Image, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../assets/colors/Colors';
import { Ionicons } from '@expo/vector-icons';   
const {height} = Dimensions.get('window'); 

const Home = () => {
  return ( 
    <SafeAreaView style = {{backgroundColor: Colors.greytoWhite}}>
      <View style = {styles.header}>
        <View>
        <Text style = {{fontSize: 34, fontWeight: 'bold',fontFamily:''}}>Good Evening</Text>
        <Text style = {{color: Colors.grey ,fontSize: 18, fontWeight:'500',fontFamily:''}}>Welcome Back</Text>
        </View>
        <TouchableOpacity>
        <Image source={require('../assets/images/Premium.png')} style={styles.premium} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
        <Image source={require('../assets/images/PremiumBanner.png')} style={styles.premiumBanner} />
        </TouchableOpacity>
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.searchContainer}>
        <Ionicons name = 'search' size={25} style = {{color: Colors.black ,paddingHorizontal: 10}} />
        <TextInput placeholder="Search through your scans" style = {{ flex:1, color: Colors.black, fontSize: 17}} placeholderTextColor={Colors.grey}/>
      </View>
      
      <View style={styles.scanContainer}>
      <TouchableOpacity>
        <Image source={require('../assets/images/ScanSingle.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/images/ScanBatch.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/images/ScanOCR.png')} />
      </TouchableOpacity>
      </View>
      <View style={styles.scanTextContainer}>
      <Text style = {{fontSize: 12, fontWeight: 'bold' ,fontFamily:''}}>Single Scan</Text>
      <Text style = {{fontSize: 12, fontWeight: 'bold', fontFamily:''}}>Batch Scan</Text>
      <Text style = {{fontSize: 12, fontWeight: 'bold', fontFamily:''}}>Scan to Text</Text>
      </View>
      <View style={styles.recentScans}>
        <Text style = {{fontSize: 20, fontWeight: 'bold', fontFamily:''}}>Recent Scans</Text>
      </View>

      <View style={styles.imageContainer}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <Image source = { require('../assets/images/image1.png') } name="Image1" style={{borderRadius: 10, marginRight: 15}} />
            <Image source = { require('../assets/images/image2.png') } name="Image2" style={{borderRadius: 10}} />
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Folders</Text>
        <TouchableOpacity>
          <Image source={ require('../assets/images/AddFolder.png') } style={styles.addFolder} />
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: Colors.white, marginTop: 20}}>
      <View style={styles.navigationContainer}>
      <TouchableOpacity>
        <Image source={require('../assets/images/home.png')} style={{marginVertical:5}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/images/Scan.png')} style={{marginVertical: -25}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/images/gear.png')} style={{marginVertical:5}} /> 
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
    </SafeAreaView>  
  );
};

const styles = StyleSheet.create({
  header:{
    marginTop: 41,
    marginLeft: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  premium: {
    marginTop: 22,
    marginRight: 16,
  },
  premiumBanner: {
    marginTop: 45,
    marginLeft: 16,
  },
  searchContainer: {
    height: 38,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  scanContainer: {
    marginTop: 15,
    marginLeft: 60,
    marginRight: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scanTextContainer: {
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentScans: {
    marginTop: 10,
    marginLeft: 25,
  },
  imageContainer: {
    flex:1,
    marginTop: 10,
    marginLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer:{
    marginTop: 10,
    marginLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addFolder:{
    marginTop: 10,
    marginRight: 16,
  },
  navigationContainer: {
    marginTop:10,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
export default Home;

