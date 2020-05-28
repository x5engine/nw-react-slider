import React from 'react';
import isUndefined from 'lodash/isUndefined';
import isFunction from 'lodash/isFunction';
import SliderCore from './slider-core';
import Popover from './popover-follow';
// PropTypes is a separate package now:
import PropTypes from 'prop-types';
var classnames = require('classnames')

// replace React.createClass with a class:
class Slider extends React.Component {
  // Use static properties for propTypes/defaultProps
  static propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    ticks: PropTypes.bool,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func,
    triggerOnChangeWhileDragging: PropTypes.bool,
    markerLabel: PropTypes.array,
    displayFollowerPopover: PropTypes.bool
  }

  constructor(props) {
    super(props);

    this.slider = React.createRef();
  }

  static defaultProps = {
    rtPosition: undefined,
    handleWidth: undefined
  }

  // Initialize state right in the class body,
  // with a property initializer:
  state = {
    rtPosition: this.props.rtPosition || undefined,
    handleWidth: this.props.handleWidth || undefined
  }

  componentDidUpdate () {
    if (isUndefined(this.state.handleWidth) && this.slider.refs.handle) {
      this.setState({handleWidth: this.slider.refs.handle.offsetWidth}) // eslint-disable-line
    }
   }

  handleSliderChange (value, rtPosition) {
    if (isFunction(this.props.onChange)) {
      // Send the value and position of the slider in case the container needs it.
      this.props.onChange(value, rtPosition)
    }
    this.setState({rtPosition})
   }

  render () {
    var trackWidth = this.slider && this.slider.state.trackWidth
    var handleWidth = this.state.handleWidth
    var dragging = this.slider && this.slider.state.dragging
    var follower = (this.props.displayFollowerPopover && !isUndefined(this.state.rtPosition))
      ? (<Popover trackWidth={trackWidth} handleWidth={handleWidth} value={this.props.value} position={this.state.rtPosition} />)
      : (<span/>)
    return (
      <div className={classnames('slider-container-component', {dragging: dragging})} >
        <SliderCore
          ref={this.slider}
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          onChange={this.handleSliderChange}
          onDragStart={this.props.onDragStart}
          onDragEnd={this.props.onDragEnd}
          triggerOnChangeWhileDragging={this.props.triggerOnChangeWhileDragging}
          ticks={this.props.ticks}
          markerLabel={this.props.markerLabel} />
        {follower}
      </div>
    )
  }
}
export default Slider
