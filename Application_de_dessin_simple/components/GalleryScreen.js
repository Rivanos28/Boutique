import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const GalleryScreen = ({ navigation }) => {
  const drawings = [
    require('../assets/snack-icon.png'), 
    require('../assets/snack-icon.png'),
    require('../assets/snack-icon.png'),
    require('../assets/snack-icon.png'),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Mes Dessins</Text>
      </View>
      <ScrollView contentContainerStyle={styles.gallery}>
        {drawings.map((drawing, index) => (
          <Image key={index} source={drawing} style={styles.drawing} />
        ))}
      </ScrollView>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Retour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawingButton} onPress={() => navigation.navigate('Drawing')}>
          <Text style={styles.drawingButtonText}>Dessin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC143C', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  topBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#B0C4DE', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: '#FFFFFF', 
    fontSize: 20,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  drawing: {
    width: 150,
    height: 150,
    margin: 10,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  backButton: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ADFF2F', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#000000', 
    fontSize: 16,
  },
  drawingButton: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00CED1', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawingButtonText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default GalleryScreen;