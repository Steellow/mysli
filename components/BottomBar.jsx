import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { FS } from '../util/StylesUtil';

const BottomBar = ({ addItem }) => {
  const [value, setValue] = useState('');

  const onSubmit = (text) => {
    addItem({ value: text, checked: false });
    setValue('');
  };

  return (
    <TextInput
      style={s.input}
      selectionColor="red"
      onChange={(event) => setValue(event.text)}
      onSubmitEditing={(event) => onSubmit(event.nativeEvent.text)}
      {...{ value }}
    />
  );
};

const s = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 18,
    borderBottomWidth: 1,
    fontSize: FS.m,
  },
});

export default BottomBar;
