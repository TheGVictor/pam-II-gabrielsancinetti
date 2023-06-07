import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Parabéns! Você chegou até aqui! Agora, fique com uma imagem agradável:</Text>
      <Image
      style = {styles.imgCat}
      source = {uri('https://organicsnewsbrasil.com.br/wp-content/uploads/2016/09/Google-Mitos-e-verdades-sobre-gatos-2.jpg')}
      >

      </Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center'
  },

  imgCat: {
    width: 50,
    height: 50
  }
});
