var React = require('react')
var Popover = require('./popover-follow')
var Slider = require('./slider-core')
var isFunction = require('lodash/isFunction')
var classnames = require('classnames')
var isUndefined = require('lodash/isUndefined')

module.exports = React.createClass({
  displayName: 'nw-slider',
  propTypes: {
    value: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    ticks: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    markerLabel: React.PropTypes.array,
    displayFollowerPopover: React.PropTypes.bool
  },

  getInitialState: function () {
    return {
      rtPosition: undefined,
      handleWidth: undefined
    }
  },

  componentDidUpdate: function () {
    if (isUndefined(this.state.handleWidth) && this.refs.slider.refs.handle) {
      this.setState({handleWidth: this.refs.slider.refs.handle.offsetWidth}) // eslint-disable-line
    }
  },

  handleSliderChange: function (value, rtPosition) {
    if (isFunction(this.props.onChange)) {
      this.props.onChange(value)
    }
    this.setState({rtPosition})
  },

  render: function () {
    var trackWidth = this.refs.slider && this.refs.slider.state.trackWidth
    var handleWidth = this.state.handleWidth
    var dragging = this.refs.slider && this.refs.slider.state.dragging
    var follower = (this.props.displayFollowerPopover && !isUndefined(this.state.rtPosition))
      ? (<Popover trackWidth={trackWidth} handleWidth={handleWidth} value={this.props.value} position={this.state.rtPosition} />)
      : (<span/>)
    return (
      <div className={classnames('slider-container-component', {dragging: dragging})} >
        <Slider
          ref='slider'
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          onChange={this.handleSliderChange}
          ticks={this.props.ticks}
          markerLabel={this.props.markerLabel} />
        {follower}
      </div>
    )
  }
})
