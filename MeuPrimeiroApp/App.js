import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.txt}>Você chegou até aqui, meus parabéns!! Agora, fique com essa imagem como recompensa :)</Text>
      <Image style = {styles.imgCat} 
      source={{uri: 'https://th.bing.com/th/id/OIP.T_HJRNpl1G-O26tQBtep8wHaE7?pid=ImgDet&rs=1'}}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ead',
    alignItems: 'center',
    textAlign: 'center',
  },

  imgCat: {
    marginTop: 100,
    width: '50%',
    height: '50%',
    borderRadius: 15,
  },

  txt: {
    fontSize: '20px',
    fontFamily: 'Verdana',
    marginTop: 20,
    fontWeight: 'bold'
  }
});
