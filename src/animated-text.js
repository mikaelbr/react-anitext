import React from 'react';
const DEFAULT_REPEAT = 3000;

const AnimatedText = React.createClass({
  getInitialState() {
    return {
      index: -1
    };
  },

  propTypes: {
    delay: React.PropTypes.number,
    interval: React.PropTypes.number,
    repeat: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number
    ]),
    animation: React.PropTypes.shape({
      time: React.PropTypes.string,
      height: React.PropTypes.number
    })
  },

  componentDidMount () {
    const {
      delay = 500,
      interval = 100,
      repeat = DEFAULT_REPEAT,
      children: text
    } = this.props;
    var _this = this;

    start(delay);

    function start (startTime) {
      _this.withDelay = setTimeout(delayFn, startTime);
    }

    function loopFn () {
      const next = getNextIndex(text, _this.state.index);
      if (next === -1) {
        clearInterval(_this.loop);
        if (repeat) {
          start(repeat === true ? DEFAULT_REPEAT : repeat);
        }
      }

      _this.setState({
        index: next
      });
    }

    function delayFn () {
      _this.loop = setInterval(loopFn, interval);
    }
  },

  componentWillUnmount () {
    if (this.withDelay) {
      clearTimeout(this.withDelay);
    }
    if (this.loop) {
      clearInterval(this.loop);
    }
  },

  render () {
    const { children: text } = this.props;
    const { index } = this.state;
    return (
      <span>
        {text.split('').map(getLetter.bind(null, this.props, index))}
      </span>
    )
  }
});

export default AnimatedText;

function getLetter (props, current, letter, letterIndex) {
  if (letter === ' ') return (
    <span key={letterIndex}>&nbsp;</span>
  );

  return <span key={letterIndex} style={getStyle(props, letterIndex, current)}>{letter}</span>
}

function defaultStyle ({ animation: { time = '100ms' } = {} }) {
  return {
    transition: `all ${time} ease-in`,
    transform: 'translateY(0)',
    display: 'inline-block'
  };
}

function highlightStyle (props) {
  const { animation: { height = '15px' } = {} } = props;
  return Object.assign({}, defaultStyle(props), {
    transform: `translateY(-${height})`
  });
}

function getStyle (props, letterIndex, shouldHiglightIndex) {
  return (letterIndex !== shouldHiglightIndex)
    ? defaultStyle(props)
    : highlightStyle(props);
}

function getNextIndex (text, prev) {
  const next = prev + 1;
  if (!text || text.length < next)
    return -1;
  if (text[next] === '')
    return getNextIndex(text, next);
  return next;
}
