import {AsyncStorage} from 'react-native';

export function storeItemInAsyncStorage(item, value) {
    AsyncStorage.setItem(item, value);
}

export function getItemFromAsyncStore(ITEM) {
    return AsyncStorage.getItem(ITEM);
}

export function removeItemFromAsyncStorage(item) {
    return AsyncStorage.removeItem(item);
}