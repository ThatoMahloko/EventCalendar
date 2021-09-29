import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Agenda } from 'react-native-calendars'

timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const ScheduleForm = (day) => {
    const [items, setItems] = useState({});

    const laodItems = () => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                 for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
           setItems(newItems);
        }, 1000);
    }



    return (
        <View style={{flex:1}}>
            <Agenda
                // testID={testIDs.agenda.CONTAINER}
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2017-05-16'}
            // renderItem={this.renderItem.bind(this)}
            // renderEmptyDate={this.renderEmptyDate.bind(this)}
            // rowHasChanged={this.rowHasChanged.bind(this)}
            // showClosingKnob={true}
            />
        </View>
    )
}

export default ScheduleForm

const styles = StyleSheet.create({

})
