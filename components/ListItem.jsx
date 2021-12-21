import React from 'react';
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { FS } from '../util/StylesUtil';

const ListItem = ({ item, tickItem, drag, isActive }) => {
  const onPress = (isChecked) => tickItem(item, isChecked);

  return (
    <View style={s.wrapper}>
      <BouncyCheckbox
        isChecked={item.isChecked}
        fillColor="red"
        unfillColor="#FFFFFF"
        textStyle={[s.text, item.checked ? s.greyText : s.blackText]}
        text={item.value}
        {...{ onPress }}
        onLongPress={drag} // Undocumented property -_-
        // Draggable list example uses disabled={isActive} on TouchableOpacity. Is it needed here?
      />
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    paddingLeft: 4, // Checkbox bounce animation is clipped without left padding
  },
  text: {
    paddingVertical: 12, // Padding here instead of 'wrapper' to get bigger touch area for BouncyCheckbox
    fontSize: FS.m,
  },
  blackText: {
    color: '#000',
  },
  greyText: {
    color: 'grey',
  },
});

export default ListItem;
