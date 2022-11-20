import { StyleSheet, View, Text } from "react-native";

const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.text}>My ToDos</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
        padding:20,
        backgroundColor:'dodgerblue',

    },
    text:{
        fontSize:24,
        textAlign:'center',
        marginTop:10,
        fontWeight:'bold',
        color:'white',
    }
})
 
export default Header;