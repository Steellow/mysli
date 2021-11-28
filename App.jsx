import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import BottomBar from './components/BottomBar';
import ListWrapper from './components/ListWrapper';
import TitleBar from './components/TitleBar';

const App = () => {
  const [items, setItems] = useState([
    {
      name: 'Noodles 🍜',
      ticked: false,
    },
    {
      name: 'Milk 🥛',
      ticked: false,
    },
    {
      name: 'Chicken 🐤',
      ticked: false,
    },
    {
      name: 'Pizza 🍕',
      ticked: false,
    },
  ]);

  const addItem = (newItem) => setItems([...items, newItem]);

  const tickItem = (item, isChecked) => {
    // Doesn't work?
    const copy = item;
    copy.ticked = isChecked;
    setItems(items.map((i) => (i.name === copy.name ? copy : i)));
  };

  const removeTicked = () => {
    console.log('asd');
    console.log(items);
    setItems(items.filter((i) => !i.ticked));
    console.log(items);
  };

  return (
    <View style={s.container}>
      <ExpoStatusBar style="auto" />
      <TitleBar {...{ removeTicked }} />
      <ListWrapper {...{ items, tickItem }} />
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
});

export default App;
