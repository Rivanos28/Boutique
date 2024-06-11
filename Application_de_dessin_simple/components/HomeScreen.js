import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.greenCircle}>
        <Text style={styles.welcomeText}>Bienvenue à l'application de Dessin</Text>
      </View>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Drawing')}
      >
        <Text style={styles.startButtonText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenCircle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#32CD32', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  welcomeText: {
    color: '#8B0000', 
    fontSize: 18,
    textAlign: 'center',
  },
  startButton: {
    width: 150,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#483D8B', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFD700', 
    fontSize: 16,
  },
});

export default HomeScreen;