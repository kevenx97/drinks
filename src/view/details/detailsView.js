import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'

import { Texto } from '../common/components/Texto'

const buildIngredients = (details) => {
  const listText = []
  for (let i = 1; i < 16; i++) {
    if (details[`strIngredient${i}`]) {
      listText.push(details[`strIngredient${i}`])
    }
  }
  return listText
}

export const DetailsView = ({ details }) => (
  <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#37474f' }}>
    <View style={styles.containerImage}>
      <Image style={styles.image} source={{ uri: details.strDrinkThumb }} />
    </View>
    <View style={styles.containerInfo}>
      <Texto style={[styles.text, { marginTop: 5, fontWeight: 'bold' }]}>
        {details.strDrink}
      </Texto>
      <Texto style={styles.text}>
        {details.strCategory}
      </Texto>
    </View>
    <View style={styles.containerColorfull}>
      <Texto style={{ textAlign: 'center', fontWeight: 'bold', color: '#64ffda' }}>Ingredients</Texto>
      {buildIngredients(details).map((text, index) => (
        <Texto key={index.toString()} style={{ textAlign: 'center', margin: 3 }}>{text}</Texto>
      ))}
    </View>
    <Texto style={[styles.text, { fontWeight: 'bold' }]}>Instructions</Texto>
    <Texto style={[styles.text, { marginBottom: 16, marginTop: 6 }]}>
      {details.strInstructions}
    </Texto>
  </ScrollView>
)

const styles = StyleSheet.create({
  containerImage: {
    height: 50,
    width: '100%',
    backgroundColor: '#263238',
  },
  containerColorfull: {
    padding: 10,
    paddingVertical: 16,
    marginVertical: 16,
    backgroundColor: '#263238',
  },
  image: {
    width: 95,
    height: 95,
    bottom: -45,
    borderRadius: 100,
    alignSelf: 'center',
    position: 'absolute',
  },
  text: {
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'justify',
    paddingHorizontal: 15,
  },
  containerInfo: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
})
