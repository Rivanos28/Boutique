import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DrawingScreen from './components/DrawingScreen';
import SaveSuccessScreen from './components/SaveSuccessScreen';
import GalleryScreen from './components/GalleryScreen';
import SettingsScreen from './components/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Drawing" component={DrawingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SaveSuccess" component={SaveSuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Gallery" component={GalleryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

