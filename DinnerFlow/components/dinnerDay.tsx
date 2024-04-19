import { Text, View, StyleSheet } from "react-native";
import CheckBox from 'react-native-check-box';
import { useState } from "react";

function DinnerDay(): React.JSX.Element {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);


  
    return (
        <View style = {styles.element}>
            <View style = {styles.leftContentBox}>
                <Text style = {styles.text}>05.05</Text>
                <Text style = {styles.text}>Wtorek</Text>
            </View>
            <View style = {styles.middleContentBox}>
                <Text style = {styles.text}>Pierwsze danie:</Text>
                <Text style = {styles.text}>Drugie danie:</Text>
            </View>
            <View style = {styles.rightContentBox}>
                <Text style = {styles.text}>Żurek</Text>
                <Text style = {styles.text}>Pierogi</Text>
            </View>
            <View style = {styles.checkboxContainer}>
                <CheckBox
                    onClick={() => {setIsChecked1(!isChecked1); (isChecked1 == false && isChecked2 == true) ? setIsChecked3(true) : setIsChecked3(false)}}
                    isChecked={isChecked1}
                    checkBoxColor="#1f89ed"
                />
                <CheckBox
                    onClick={() => {setIsChecked2(!isChecked2); (isChecked1 == true && isChecked2 == false) ? setIsChecked3(true) : setIsChecked3(false)}}
                    isChecked={isChecked2}
                    checkBoxColor="#1f89ed"
                />
                
            </View>
            <View>
                <CheckBox
                style = {{padding: 10}}
                    onClick={() => {setIsChecked3(!isChecked3); setIsChecked1(!isChecked3); setIsChecked2(!isChecked3)}}
                    isChecked={isChecked3}
                    checkBoxColor="#1f89ed"
                />
            </View>
            
        </View>
    );
  }

  const styles = StyleSheet.create({
    scrollView: {
    },
    text: {
      fontSize: 15,
      color: 'black'
    },
    element:{
        flexDirection: 'row',
        padding: 1,
        borderBottomWidth: 1
    },
    leftContentBox:{
        flex: 1,
        
    },
    middleContentBox:{
        flex: 2
    },
    rightContentBox:{
        flex: 2
    },
    checkboxContainer:{
        
    }


  });

  export default DinnerDay;