import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native'

import _ from 'lodash'
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import { CategoriesDrinksList } from './categoriesDrinksList'

const renderTabBar = () => (
  <ScrollableTabBar style={style.tabBar} />
)

export const CategoriesView = ({
  drinksFromCategories = [],
  listCategories = [],
  navigateDetails,
  onChangeInput,
  onChangeTab,
  notResult,
}) => (
  <View style={{ flex: 1, backgroundColor: '#263238' }}>
    <View style={style.inputView}>
      <TextInput
        style={style.input}
        placeholder="Search..."
        underlineColorAndroid="transparent"
        onChangeText={_.debounce(onChangeInput, 1000)}
      />
      <Image style={style.icon} source={require('../common/assets/search.png')} />
    </View>
    <ScrollableTabView
      initialPage={0}
      renderTabBar={renderTabBar}
      showsHorizontalScrollIndicator={false}
      tabBarTextStyle={{ color: '#fafafa' }}
      onChangeTab={event => onChangeTab(event.i)}
      tabBarUnderlineStyle={style.tabBarUnderline}
      contentStyle={{ backgroundColor: '#37474f' }}
    >
      {
        listCategories.map((category, index) => (
          <CategoriesDrinksList
            page={index}
            key={index.toString()}
            notResult={notResult}
            drinks={drinksFromCategories}
            tabLabel={category.strCategory}
            navigateDetails={navigateDetails}
          />
        ))
      }
    </ScrollableTabView>
  </View>
)

const style = StyleSheet.create({
  inputView: {
    height: 40,
    margin: 14,
    marginTop: 0,
    borderRadius: 7,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0,
    paddingHorizontal: 14,
    backgroundColor: '#f5f5f5',
  },
  input: {
    flexGrow: 1,
    borderBottomWidth: 0,
  },
  tabBar: {
    elevation: 5,
    borderBottomWidth: 0,
    backgroundColor: '#263238',
  },
  tabBarUnderline: {
    height: 2,
    backgroundColor: '#64ffda',
  },
  icon: {
    width: 20,
    height: 20,
  },
})
