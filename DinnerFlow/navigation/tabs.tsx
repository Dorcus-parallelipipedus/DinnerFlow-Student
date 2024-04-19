import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import QrScannerScreen from "../screens/QrScannerScreeen";
import PaymentsScreen from "../screens/PaymentsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const bought = false

function Tabs(): React.JSX.Element {
  
  
    return (
        <Tab.Navigator>
            <Tab.Screen name="Start" component={HomeScreen} />
            <Tab.Screen name="Qr" component={QrScannerScreen} />
            {
                bought ?(
                    <Tab.Screen name="Płatności" component={PaymentsScreen} />
                ) : (
                    <Tab.Screen name="Kalendarz" component={CalendarScreen} />
                )
            }            
            <Tab.Screen name="Ustawienia" component={SettingsScreen} />
        </Tab.Navigator>
    );
  }

  export default Tabs;