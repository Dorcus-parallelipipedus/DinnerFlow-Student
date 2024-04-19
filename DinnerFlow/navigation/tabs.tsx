import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import QrScannerScreen from "../screens/QrScannerScreeen";
import PaymentsScreen from "../screens/PaymentsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { useState } from "react";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

function Tabs(): React.JSX.Element {
    const [bought, setBought] = useState(false)
  
    return (
        <Tab.Navigator>
            <Tab.Screen name="Start" component={HomeScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/icons/home.png')}
                            style={{ width: 30, height: 30, marginBottom: 10 }}
                        />
                    </View>
                )
            }}/>
            {
                bought ?(
                    <Tab.Screen name="Kalendarz" component={CalendarScreen} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                                <Image 
                                    source={require('../assets/icons/calendar.png')}
                                    style={{ width: 30, height: 30, marginBottom: 10 }}
                                />
                            </View>
                        )
                    }}/>
                ) : (
                    <Tab.Screen name="Płatności" component={PaymentsScreen} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                                <Image 
                                    source={require('../assets/icons/money.png')}
                                    style={{ width: 30, height: 30, marginBottom: 10 }}
                                />
                            </View>
                        )
                    }}/>
                )
            }            
            <Tab.Screen name="Ustawienia" component={SettingsScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/icons/settings.png')}
                            style={{ width: 30, height: 30, marginBottom: 10 }}
                        />
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
  }

  export default Tabs;