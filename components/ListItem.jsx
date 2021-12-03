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
        textStyle={item.checked ? s.disabledText : s.text}
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
