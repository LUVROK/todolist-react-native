import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/Header'
import ListItem  from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listofItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Помыть машину', key: '2'},
    {text: 'Купить телефон', key: '3'},
    {text: 'Починить кран', key: '4'},
    {text: 'дед фул просил', key: '5'},
    {text: 'харе пялить долбаеб', key: '6'},
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listofItems => listofItems.key != key)
    });
  }

  return (
    <View>
      <Header/>
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listofItems} renderItem={({ item }) => (
          <ListItem style={styles.list} el={item} deleteHandler={deleteHandler}/>
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginLeft: 100
  }
});
