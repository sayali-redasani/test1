import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import Colors from '../assets/colors/Colors';

const data = [
  {
    title: 'Scan anything in HD, wherever you are...',
    text: 'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds.',
    image: require('../assets/images/screen1.png'),
  },
  {
    title: 'Navigate work documents like a Pro',
    text: 'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly.',
    image: require('../assets/images/screen2.png'),
  },
  {
    title: 'Less time scanning homework = more time for fun',
    text: 'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
    image: require('../assets/images/screen3.png'),
  },
  {
    title: 'Covert Pictures to Text with our next generation offline OCR',
    text: 'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
    image: require('../assets/images/screen4.png'),  
  },
];

const Onboard = (props) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View>
        <Image source={require('../assets/images/Next.png')} style={styles.doneImage} />
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  image: {
    marginVertical: 91,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: '',
    marginHorizontal: 70,
  },
  text: {
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: '',
    marginHorizontal: 35,
    marginTop: 42,
  },
  dotStyle: {
    backgroundColor: Colors.grey,
  },
  activeDotStyle: {
    backgroundColor: Colors.accentBlue,
  },
  doneImage: {
    flex: 1, 
    marginEnd: 29,
  },
});

export default Onboard;
