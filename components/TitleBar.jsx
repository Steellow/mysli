import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FS } from '../util/StylesUtil';

const TitleBar = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Mysli</Text>
      <TouchableOpacity style={s.buttonContainer}>
        <Text style={s.buttonText}>🗑</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 60, // Flex row increases height for some reason

    paddingBottom: 12,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: FS.xl,
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: FS.emojiButton,
  },
});

export default TitleBar;
