import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

class Deck extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired
      })
    ).isRequired,
    renderCard: PropTypes.func.isRequired
  }

  renderCards() {
    const { data, renderCard } = this.props;
    return data.map(i => (renderCard(i)));
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

export default Deck;
