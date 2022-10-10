import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function App() {

  const [visible, setVisible] = useState(true)

  const toggleView = () => {
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={toggleView} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text style={{color: '#fff'}}>{visible ? 'Gizle' : 'Göster'}</Text>
        </View>   
        </TouchableOpacity>
        <View style={{display: visible ? 'flex' : 'none'}}>
          <Text>bunu ya gördün ya da görmedin</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: 'red',
    heigt: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
