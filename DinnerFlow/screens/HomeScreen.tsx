import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

function HomeScreen(): React.JSX.Element {

    const [used, setUsed] = useState(false);
    const [use, setUse] = useState(false)
  
    return (
        <View>
            <View style = {styles.dish}>
                <Text style = {styles.header}>Dzisiaj</Text>
                <Text style = {[styles.content, {fontSize: 20}]}>Pierwsze danie:</Text>
                <Text style = {[styles.content, {marginBottom: 10}]}>Żurek</Text>
                <Text style = {[styles.content, {fontSize: 20}]}>Drugie danie:</Text>
                <Text style = {[styles.content, {marginBottom: 10}]}>Pierogi</Text>
                
                {
                    (used == false)? (
                        <Button title="Wykorzystaj"
                        color={'#1790d1'}
                        onPress={() => setUse(true)}
                    />
                    ) : (
                        <Text style = {{color: 'black', opacity: 0.5, textAlign: 'center'}}>Twój dzisiejszy obiad został wykorzystany</Text>
                    )
                }
                {
                    (use == true)? (
                        <View>
                            <Text style={{color: 'red', opacity: 0.8, textAlign: "center", fontWeight: 'bold', fontSize: 15, marginTop: 10}}>Czy napewno?</Text>
                            <Button title="Tak"
                            color={'green'}
                            onPress={() => {setUsed(true); setUse(false)}}
                            />
                            <View style={{height: 5}}></View>
                            <Button title="Nie"
                            color={'red'}
                            onPress={() => setUse(false)}
                            />
                        </View>
                    ) : (
                        <View></View>
                    )
                }
            </View>
            <View style = {styles.dish}>
                <Text style = {styles.header}>Jutro</Text>
                <Text style = {[styles.content, {fontSize: 20}]}>Pierwsze danie:</Text>
                <Text style = {[styles.content, {marginBottom: 10}]}>Rosół</Text>
                <Text style = {[styles.content, {fontSize: 20}]}>Drugie danie:</Text>
                <Text style = {styles.content}>Kotlet schabowy z ziemniakami i mizerią</Text>
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    dish: {
        padding: 10,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 3,
    },
    header:{
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 10,
        marginBottom: 10,
        color: 'black',
        borderBottomWidth: 2
    },
    content:{
        fontSize: 15,
        paddingTop: 10,
        color: 'black',
    },
    dinner:{

    }
});

export default HomeScreen;