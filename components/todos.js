import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Todos = ({ item, deleteItem }) => {
    return ( 
        <View>
            <TouchableOpacity onPress={()=> deleteItem(item.key)}>
                <View style={styles.list}>
                    <AntDesign name="delete" size={20} color="dodgerblue"/>
                    <Text style={styles.item}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    list:{
        backgroundColor:'skyblue',
        padding:10,
        marginVertical:10,
        borderRadius:5,
        flexDirection:'row'
    },
    item:{
        marginLeft:10,
    }
})
 
export default Todos;