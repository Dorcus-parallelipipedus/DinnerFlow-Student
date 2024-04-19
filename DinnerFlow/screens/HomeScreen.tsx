import { View, Text, StyleSheet } from "react-native";;

function HomeScreen(): React.JSX.Element {    
  
    return (
        <View>
            <View style = {styles.dish}>
                <Text style = {styles.header}>Dzisiaj</Text>
                <Text style = {styles.content}>Pierwsze danie:</Text>
                <Text style = {styles.content}>sds</Text>
                <Text style = {styles.content}>Drugie danie:</Text>
                <Text style = {styles.content}>sss:</Text>
            </View>
            <View style = {styles.dish}>
                <Text style = {styles.header}>Jutro</Text>
                <Text style = {styles.content}>Pierwsze danie:</Text>
                <Text style = {styles.content}>sss</Text>
                <Text style = {styles.content}>Drugie danie:</Text>
                <Text style = {styles.content}>sss:</Text>
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    dish: {
        width: '100%',
        padding: 15,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

elevation: 5,
    },
    header:{
        fontSize: 25,
        textAlign: 'center'
    },
    content:{
        fontSize: 15
    },
    dinner:{

    }
});

export default HomeScreen;