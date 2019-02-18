import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  Image,
} from 'react-native'

const buildRows = (data, columns) => {
  const rows = Math.floor(data.length / columns)
  let lastRowElements = data.length - rows * columns
  while (lastRowElements !== columns) {
    data.push({
      strDrink: '',
      strDrinkThumb: 'empty',
      empty: true,
    })
    lastRowElements += 1
  }
  return data
}

export const CategoriesDrinksList = ({ drinks = [], notResult, navigateDetails }) => {
  const columns = 3
  return (
    drinks.length ? (
      <FlatList
        data={buildRows(drinks, columns)}
        removeClippedSubviews
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigateDetails(item.idDrink)}
            style={style.item}
          >
            <Image
              style={[style.image, !item.empty && { backgroundColor: '#263238' }]}
              source={{ uri: item.strDrinkThumb }}
            />
            <Text style={style.text}>{item.strDrink}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    ) : (
      <View style={style.loading}>
        {notResult ? (
          <Text style={style.text}>No results found :(</Text>
        ) : (
          <Text style={style.text}>Loading...</Text>
        )}
      </View>
    )
  )
}

const style = StyleSheet.create({
  image: {
    width: 72,
    height: 72,
    borderRadius: 100,
  },
  item: {
    alignItems: 'center',
    flexGrow: 1,
    flexBasis: 0,
    padding: 5,
    margin: 3,
  },
  text: {
    fontSize: 13,
    color: '#fcfcfc',
    paddingTop: 5,
    textAlign: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
