import React from 'react';
import { StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ListItem from './ListItem';

const ListWrapper = ({ items, tickItem, setItems }) => {
  const renderItem = ({ item, drag, isActive }) => (
    <ListItem {...{ item, tickItem, drag, isActive }} />
  );

  return (
    <GestureHandlerRootView>
      <DraggableFlatList
        style={s.list}
        data={items}
        onDragEnd={({ data }) => setItems(data)} // Saves the reordered list after dragging
        renderItem={renderItem}
        keyExtractor={(item) => item.value}
      />
    </GestureHandlerRootView>
  );
};

const s = StyleSheet.create({
  list: {
    marginTop: 18,
  },
});

export default ListWrapper;
