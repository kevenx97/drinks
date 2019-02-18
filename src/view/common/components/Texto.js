import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Texto = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#fafafa',
  },
})
