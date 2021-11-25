import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { FS } from '../util/StylesUtil';

const ListItem = ({ text }) => {
  return (
    <View style={s.wrapper}>
      <BouncyCheckbox
        fillColor="red"
        unfillColor="#FFFFFF"
        textStyle={s.text}
        // onPress={(isChecked) => setChecked(isChecked)}
        {...{ text }}
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
});

export default ListItem;
