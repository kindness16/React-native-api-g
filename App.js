import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList } from 'react-native';
import Second from './Seond'
  export default function App() {
  const [value, onChangeText] = React.useState('')
  const [data, setData] = React.useState([])
  async function go(val) {
    let resp = await fetch('http://api.giphy.com/v1/gifs/search?q={' + val + '}&api_key=eha4E41frHYtDPdSNKXlT4cytkW1nVkU')
    let data = await resp.json()
    setData(data.data)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txtName}>My Aplication</Text>
      <TextInput style={ styles.inputName}
        onChangeText={text => onChangeText(text)}
        value={value} />
  <Button  style={{color:'red'}} title="Search" onPress={() => {go(value)}} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.img} source={{ uri: item.images.original.url }} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  txtName: {
    fontSize: 34,
    textAlign: 'center',
    color:'red',
    marginTop:40,
    marginBottom:20,

 
  },
  inputName:{
    marginRight:20,
    marginLeft:20,
    height:40,
    backgroundColor:'lightgrey',
    borderWidth:1
  },
  img:{
    width:400,
    height:270
  },
  appButtonText: {
    color:"#841584"
  }
});