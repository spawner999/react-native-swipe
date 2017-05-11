import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

import Deck from './src/Deck';
import DATA from './mocks/data';

// TODO this better be a component
function renderCard(item) {
  const { id, text, uri } = item;
  return (
    <Card
      key={id}
      title={text}
      image={{ uri }}
    >
      <Text style={{ marginBottom: 10 }}>
        Lorem ipsum.
      </Text>
      <Button
        icon={{ name: 'code' }}
        backgroundColor="#03a9f4"
        title="View Now"
      />
    </Card>
  );
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={renderCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal'
  }
});

Expo.registerRootComponent(App);
