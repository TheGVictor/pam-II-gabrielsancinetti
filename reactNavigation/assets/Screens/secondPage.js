import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export default function SecondPage() {

    const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <Text style = {styles.textModel}>Seja muito bem vindo a segunda tela! Perceba que o fundo mudou e que agora pode retroceder para a tela anterior.<br/>Clique para ir para a próxima:</Text>
    <TouchableOpacity style = {styles.buttonFront} onPress = {() => navigation.navigate("Third")}>avançar</TouchableOpacity>
    <TouchableOpacity style = {styles.buttonBack} onPress = {() => navigation.goBack()}>voltar</TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#ff533a',
  alignItems: 'center',
  justifyContent: 'center',
},

textModel: {
  fontSize: 40,
  padding: 15,
  textAlign: 'center',
  position: 'absolute',
  top: 50,
  color: '#FFF',
  fontWeight: 100,
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
  top: 70,
  bottom: 20
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
  top: 90
}
});
