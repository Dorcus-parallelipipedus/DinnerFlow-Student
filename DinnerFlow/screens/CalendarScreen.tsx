import { useState } from "react";
import { View, Text } from "react-native";
import { Calendar } from 'react-native-calendars';

function CalendarScreen(): React.JSX.Element {
    const today = new Date().toISOString().split('T')[0]
    const [day, setDay] = useState(today)
    const [dish1, setDish1] = useState(1)
    const [dish2, setDish2] = useState(0)
    
    return (
        <View>
            <Calendar
                current={today}
                minDate={'2022-01-01'}
                maxDate={'2022-12-31'}
                onDayPress={(day) => { setDay(day.dateString); setDish1(Math.random()); setDish2(Math.random()) }}
                monthFormat={'yyyy MM'}
                onMonthChange={(month) => { console.log('month changed', month) }}
                hideArrows={false}
                renderArrow={(direction) => ('')}
                hideExtraDays={true}
                disableMonthChange={true}
                firstDay={1}
                hideDayNames={true}
                showWeekNumbers={true}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                onDayLongPress={(day) => { setDay(day.dateString); setDish1(Math.random()); setDish2(Math.random()) }}
            />

            <View style = {{marginTop: 15}}>
                <Text style={{fontSize: 15, textAlign: 'center'}}>{day}</Text>
                <View style = {{backgroundColor: dish1 ? '#fc6a6c' : '#8bff6b', padding: 10, marginBottom: 5}}>
                    <Text>Pierwsze danie:</Text>
                    <Text>Żurek</Text>
                </View>
                <View style = {{backgroundColor: dish2 ? '#fc6a6c' : '#8bff6b', padding: 10}}>
                    <Text>Drugie danie:</Text>
                    <Text>Pierogi</Text>
                </View>
            </View>
        </View>
    );
}

export default CalendarScreen;
