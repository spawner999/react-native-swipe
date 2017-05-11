import React, { Component, PropTypes } from 'react';
import { Animated, PanResponder } from 'react-native';

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

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        const { dx, dy } = gesture;
        // HACK this is updating state outside of setState()
        position.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder, position };
  }

  renderCards() {
    const { data, renderCard } = this.props;
    return data.map(i => (renderCard(i)));
  }

  render() {
    const { panResponder: { panHandlers }, position } = this.state;

    return (
      <Animated.View
        style={position.getLayout()}
        {...panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;
