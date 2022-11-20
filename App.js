import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  Alert, 
  FlatList, 
  Keyboard, 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  View } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import Todos from './components/todos';

export default function App() {

  const [todo, setTodo] = useState([
    {text:"Coding", key:1},
    {text:"Cooking", key:2},
    {text:"napping", key:3},
    {text:"coding again", key:4}
  ]);

  const deleteItem = (key)=>{
    setTodo((newTodo)=>{
      return newTodo.filter((value)=> value.key != key)
    })
  }

  const Add = (text) =>{
   if(text.length > 3){
    setTodo((newTodo)=>{
      return [
        {text: text, key:Math.ceil(Math.random() * 100) },
        ...newTodo
      ];
    })
   }else{
    Alert.alert("Opps", "Text should have more than 3 letters");
   }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo Add={Add}/>
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item })=>(
                <Todos item={item} deleteItem={deleteItem}/>
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    marginHorizontal:20,
  },
  list:{
    flex:1,
  }
});
