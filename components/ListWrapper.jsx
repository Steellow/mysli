import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const ListWrapper = ({ items }) => {
  const renderItem = ({ item }) => <ListItem text={item} />;

  return (
    <FlatList
      style={s.list}
      data={items}
      renderItem={renderItem}
      keyExtractor={(_, idx) => idx.toString()}
    />
  );
};

const s = StyleSheet.create({
  list: {
    marginTop: 18,
  },
});

export default ListWrapper;
