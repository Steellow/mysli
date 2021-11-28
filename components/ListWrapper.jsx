import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const ListWrapper = ({ items, tickItem }) => {
  const renderItem = ({ item }) => <ListItem {...{ item, tickItem }} />;

  return (
    <FlatList
      style={s.list}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};

const s = StyleSheet.create({
  list: {
    marginTop: 18,
  },
});

export default ListWrapper;
