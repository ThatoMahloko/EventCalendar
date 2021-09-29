import { View, Text} from 'react-native'
import {TouchableOpacity, Card, Typography, Avatar } from 'react-native-paper'
import React, { useState } from 'react'
import { Agenda } from 'react-native-calendars'

const timeToString = (time) => {
  const date = new Date(Date.now());
  return date.toISOString().split('T')[0];
}

export default function App(day) {
  const [items, setItems] = useState({});

  const loadItems = () => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
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

  const renderItem = (item) => {
    <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
      <Card>
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>{item.name}</Typography>
            <Avatar.Text labl="J" />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  }

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        // testID={testIDs.agenda.CONTAINER}
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2021-09-28'}
        renderItem={renderItem}
      // renderItem={this.renderItem.bind(this)}
      // renderEmptyDate={this.renderEmptyDate.bind(this)}
      // rowHasChanged={this.rowHasChanged.bind(this)}
      // showClosingKnob={true}
      />
    </View>
  )
}
