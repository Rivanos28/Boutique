import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [username, setUsername] = useState('Rakotobe');
  const [password, setPassword] = useState('1420azer');
  const [language, setLanguage] = useState('Français');
  const [theme, setTheme] = useState('clair/sombre');

  const saveSettings = () => {

    console.log('Settings saved:', { username, password, language, theme });
    
    navigation.navigate('Drawing');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Paramètres</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Préférences de l'utilisateur</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom d'utilisateur:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mot de passe:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Paramètres de l'application</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Langue:</Text>
          <TextInput
            style={styles.input}
            value={language}
            onChangeText={setLanguage}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Thème:</Text>
          <TextInput
            style={styles.input}
            value={theme}
            onChangeText={setTheme}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={saveSettings}>
        <Text style={styles.saveButtonText}>Enregistrer les modifications</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#556B2F', 
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF', 
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    color: '#FFFFFF', 
    backgroundColor: '#FF6347', 
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
  },
  inputGroup: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  label: {
    color: '#FFFFFF', 
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#D8BFD8', 
    borderRadius: 10,
    padding: 10,
    color: '#4B0082', 
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: '#A52A2A', 
    padding: 15,
    borderRadius: 25,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#FFFFFF', 
  },
});

export default SettingsScreen;
