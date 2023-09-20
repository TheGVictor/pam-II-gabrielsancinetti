import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import SecondPage from './secondPage';

export default function InitialPage() {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style = {styles.textModel}>Seja muito bem vindo a primeira tela!<br/>Sinta-se a vontade para navegar!</Text>
      <TouchableOpacity style = {styles.buttonFront} onPress = {() => navigation.navigate("Second")}>avançar</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#357599',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textModel: {
    fontSize: 40,
    padding: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 50,
    color: '#FFF',
    fontWeight: 100
  },

  buttonFront: {
    color: '#109940',
    fontWeight: 100,
    fontSize: 30,
    textTransform: 'uppercase',
    backgroundColor: '#295872',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
    fontFamily: 'Verdana',
    bottom: 20
  },

});
