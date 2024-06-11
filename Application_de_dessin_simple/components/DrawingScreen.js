import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ColorPicker } from 'react-native-color-picker';

const DrawingScreen = ({ navigation }) => {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#000000');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
                                                    
  const handleTouchStart = (e) => {
    const { locationX, locationY } = e.nativeEvent;
    setCurrentPath(`M ${locationX} ${locationY}`);
    setIsDrawing(true);
  };

  const handleTouchMove = (e) => {
    if (!isDrawing) return;
    const { locationX, locationY } = e.nativeEvent;
    setCurrentPath((prevPath) => `${prevPath} L ${locationX} ${locationY}`);
  };

  const handleTouchEnd = () => {
    setPaths([...paths, { d: currentPath, color: isErasing ? '#FFFFFF' : brushColor }]);
    setCurrentPath('');
    setIsDrawing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Retour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('SaveSuccess')}>
          <Text style={styles.saveButtonText}>Sauvegarder</Text>
        </TouchableOpacity>
      </View>
      <View
        style={styles.drawingArea}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Svg style={styles.svg}>
          {paths.map((path, index) => (
            <Path key={index} d={path.d} stroke={path.color} strokeWidth={5} fill="none" />
          ))}
          {currentPath && (
            <Path d={currentPath} stroke={isErasing ? '#FFFFFF' : brushColor} strokeWidth={5} fill="none" />
          )}
        </Svg>
      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.brushButton} onPress={() => { setIsErasing(false); setShowColorPicker(false); }}>
          <Text style={styles.brushButtonText}>Pinceau</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.eraserButton} onPress={() => setIsErasing(true)}>
          <Text style={styles.eraserButtonText}>Gomme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorButton} onPress={() => setShowColorPicker(!showColorPicker)}>
          <Text style={styles.colorButtonText}>Couleur</Text>
        </TouchableOpacity>
      </View>
      {showColorPicker && (
        <ColorPicker
          onColorSelected={(color) => { setBrushColor(color); setShowColorPicker(false); }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  backButton: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6347', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ADFF2F', 
    fontSize: 16,
  },
  saveButton: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D3D3D3', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#800000', 
    fontSize: 16,
  },
  drawingArea: {
    width: '90%',
    height: '60%',
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  brushButton: {
    width: 100,
    height: 50,
    backgroundColor: '#8B0000', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  brushButtonText: {
    color: '#FF4500', 
    fontSize: 16,
  },
  eraserButton: {
    width: 100,
    height: 50,
    backgroundColor: '#FFD700', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  eraserButtonText: {
    color: '#8B0000', 
    fontSize: 16,
  },
  colorButton: {
    width: 100,
    height: 50,
    backgroundColor: '#B22222', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorButtonText: {
    color: '#32CD32', 
    fontSize: 16,
  },
});

export default DrawingScreen;