import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { useState } from "react";
import dinnerDay from "../components/dinnerDay";
import DinnerDay from "../components/dinnerDay";
import CheckBox from "react-native-check-box";


function PaymentsScreen(): React.JSX.Element {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
      <ScrollView style={styles.scrollView}>
        {/* <CheckBox
                    onClick={() => setIsChecked(!isChecked)}
                    isChecked={isChecked}
        /> */}
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        <DinnerDay />
        
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    scrollView: {
    },
    text: {
      fontSize: 20,
    },

  });

  export default PaymentsScreen;