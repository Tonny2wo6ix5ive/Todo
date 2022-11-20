import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo = ({Add}) => {

    const [text, setText] = useState('');

    const Change = (val)=>{
        setText(val);
    }

    return ( 
        <View>
            <TextInput
                placeholder="eg shopping"
                multiline
                style={styles.textInput}
                onChangeText={Change}
            />
            <Button onPress={()=> Add(text)} title="Add Item"/>
        </View>
     );
}
 
const styles = StyleSheet.create({
    textInput: {
        textAlign:'center',
        borderBottomColor: 'dodgerblue',
        borderBottomWidth:2,
        marginTop: 20,
        paddingVertical: 6,
        paddingHorizontal: 4,
        marginBottom:20,

    }
})

export default AddTodo;