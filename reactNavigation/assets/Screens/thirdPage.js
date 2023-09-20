import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function ThirdPage() {

    const navigation = useNavigation()

  return (
<View style={styles.container}>
    <Text style = {styles.textModel}>Seja muito bem vindo a terceira e última tela!<br/>Obrigado por navegar em nosso App!</Text>
    <TouchableOpacity style = {styles.buttonBack} onPress = {() => navigation.goBack()}>voltar</TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#a4620d',
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

buttonBack: {
  color: '#992020',
  fontWeight: 100,
  fontSize: 30,
  textTransform: 'uppercase',
  backgroundColor: '#295872',
  paddingHorizontal: 25,
  paddingVertical: 15,
  borderRadius: 20,
  fontFamily: 'Verdana',
  top: -50
}
});