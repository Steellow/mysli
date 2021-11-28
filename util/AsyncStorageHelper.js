import AsyncStorage from '@react-native-async-storage/async-storage';

import { KEY_ITEMS } from './Constants';

export const storeItems = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(KEY_ITEMS, jsonValue);
  } catch (e) {
    // TODO: Handle error
    console.log('storeItems error');
  }
};

export const loadItems = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(KEY_ITEMS);
    return jsonValue != null ? JSON.parse(jsonValue) : defaultItems;
    // return defaultItems;
  } catch (e) {
    // TODO: Handle error
    console.log('loadItems error');
  }
};

const defaultItems = [
  {
    value: 'Tap an item to check/uncheck it 👆',
    checked: false,
  },
  {
    value: 'Hold & drag an item to reorder it 🤏',
    checked: false,
  },
  {
    value: 'Clear checked items by tapping the 🗑',
    checked: false,
  },
];
