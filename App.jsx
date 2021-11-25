import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import BottomBar from './components/BottomBar';
import ListWrapper from './components/ListWrapper';
import { FS } from './util/StylesUtil';

const App = () => {
  const [items, setItems] = useState([
    'Noodles 🍜',
    'Milk 🥛',
    'Chicken 🐤',
    'Pizza 🍕',
  ]);

  const addItem = (newItem) => setItems([...items, newItem]);

  return (
    <View style={s.container}>
      <ExpoStatusBar style="auto" />

      <Text style={s.title}>Mysli</Text>
      <ListWrapper {...{ items }} />
      <BottomBar {...{ addItem }} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 24, // Always good to have some horizontal amrgin for spacing purposes
    marginTop: 12,
  },
  title: {
    fontSize: FS.xl,
    fontWeight: 'bold',
    paddingBottom: 12,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
});

export default App;
