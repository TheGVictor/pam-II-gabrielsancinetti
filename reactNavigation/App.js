import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './assets/Screens/initialPage';
import SecondPage from './assets/Screens/secondPage';
import ThirdPage from './assets/Screens/thirdPage';

export default function App() {
const Stack = createNativeStackNavigator()

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "First" screenOptions={{ headerShown: false}}>
        <Stack.Screen name = "First" component  = {InitialPage} />
        <Stack.Screen name = "Second" component  = {SecondPage}/>
        <Stack.Screen name = "Third" component  = {ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
;
