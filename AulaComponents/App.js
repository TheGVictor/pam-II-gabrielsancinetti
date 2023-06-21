import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { StyledComponent } from 'styled-components';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={styles.txt}
        >
          Snorlax Berrie 
        </Text>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png',
          }}
          style={styles.img}
        />
      </View>
      <TextInput
        style = {styles.inputText}
        defaultValue="Digite aquiii!"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 45,
    alignSelf: "center",
    color: "green",
  },
  img: {
    width: 200, 
    height: 210,
    alignSelf: "center" 
  },

  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1, 
    padding: 5,
    margin: 15,
  }
})

export default Pokemon;