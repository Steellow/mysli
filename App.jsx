import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import BottomBar from './components/BottomBar';
import ListWrapper from './components/ListWrapper';
import TitleBar from './components/TitleBar';
import { loadItems, storeItems } from './util/AsyncStorageHelper';

const App = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const setItemsFromStorage = async () => {
      const loadedItems = await loadItems();
      setItems(loadedItems);
    };
    setItemsFromStorage();
  }, []);

  useEffect(() => storeItems(items), [items]);

  const addItem = (newItem) => setItems((curItems) => [...curItems, newItem]);

  const tickItem = (item, isChecked) => {
    const copy = item;
    copy.checked = isChecked;
    setItems(items.map((i) => (i.value === copy.value ? copy : i)));
  };

  const removeChecked = () => setItems(items.filter((i) => !i.checked));

  return (
    <View style={s.container}>
      <ExpoStatusBar style="auto" />
      <TitleBar {...{ removeChecked }} />
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
