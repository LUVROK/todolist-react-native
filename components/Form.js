import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Form({ addHandler }) {
    const [text, setValue ] = useState('');
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Впешите задачу"/>
            <Button color='green' onPress = {() => addHandler(text)} title='Добавить задачу'/>
        </View>
    );
}

const styles = StyleSheet.create({
  input:{
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      padding: 10,
      marginVertical: 30,
      marginHorizontal: '20%', 
      width: '60%'
  }
});

