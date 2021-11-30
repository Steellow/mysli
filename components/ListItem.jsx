import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { FS } from '../util/StylesUtil';

const ListItem = ({ item, tickItem }) => {
  const onPress = (isChecked) => tickItem(item, isChecked);

  return (
    <View style={s.wrapper}>
      <BouncyCheckbox
        fillColor="red"
        unfillColor="#FFFFFF"
        textStyle={item.checked ? s.disabledText : s.text}
        text={item.value}
        {...{ onPress }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
    paddingLeft: 4, // Checkbox bounce animation is clipped without left padding
  },
  text: {
    fontSize: FS.m,
    color: '#000',
  },
  disabledText: {
    fontSize: FS.m,
    color: 'grey',
  },
});

export default ListItem;
