import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SaveSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.oval}>
        <View style={styles.messageContainer}>
          <Text style={styles.successMessage}>Dessin sauvegardé avec succès</Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Drawing')}
        >
          <Text style={styles.backButtonText}>Retour au Dessin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.galleryButton}
          onPress={() => navigation.navigate('Gallery')}
        >
          <Text style={styles.galleryButtonText}>Galerie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.settingsButtonText}>Paramètres</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  oval: {
    width: '90%',
    height: '80%',
    backgroundColor: '#B0C4DE', 
    borderRadius: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  messageContainer: {
    width: '80%',
    height: '30%',
    backgroundColor: '#4B0082', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  successMessage: {
    color: '#FF4500', 
    fontSize: 18,
    textAlign: 'center',
  },
  backButton: {
    width: 150,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6347', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  galleryButton: {
    width: 150,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6347', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryButtonText: {
    color: '#FFFFFF', 
    fontSize: 16,
  },
  settingsButton: {
    width: 150,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6347', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsButtonText: {
    color: '#FFFFFF', 
    fontSize: 16,
  },
});

export default SaveSuccessScreen;
