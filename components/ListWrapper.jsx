import React from 'react';
import { StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

import ListItem from './ListItem';

const ListWrapper = ({ items, tickItem, setItems }) => {
  const renderItem = ({ item, drag, isActive }) => (
    <ListItem {...{ item, tickItem, drag, isActive }} />
  );

  return (
    <DraggableFlatList
      style={s.list}
      data={items}
      onDragEnd={({ data }) => setItems(data)} // Saves the reordered list after dragging
      renderItem={renderItem}
      keyExtractor={(item) => item.value}
      containerStyle={s.container}
      overScrollMode="never" // Disabled the hightlight effect when scrolling to end of list
    />
  );
};

const s = StyleSheet.create({
  container: {
    // These attributes causes DraggableFlatList filling empty space, and not growing over other components
    flexGrow: 1,
    flex: 1,
  },
  list: {
    marginTop: 18,
  },
});

export default ListWrapper;
