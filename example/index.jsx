/**
 * Dependencies
 */
var React = require('react')
var ReactDOM = require('react-dom')
var Slider = require('../src/slider')
require('../src/slider.less')
require('./index.less')

var classnames = require('classnames')

var fakeStore = {
  value: 3,
  min: 1,
  max: 5
}

var updateSliderValue = function (value) {
  fakeStore.value = value
  render()
}
var updateSliderMin = function (min) {
  fakeStore.min = min
  render()
}
var updateSliderMax = function (max) {
  fakeStore.max = max
  render()
}

var Index = React.createClass({
  displayName: 'Index',

  propTypes: {
    config: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      calculatedValue: this.props.config.value * 2,
      ticks: 1,
      displayInput: 0,
      displayFollowerPopover: 0,
      displayMarkers: 0,
      triggerOnChangeWhileDragging: 1
    }
  },

  componentWillReceiveProps: function (nextProps) {
    if (this.props.config.value !== nextProps.config.value) {
      this.setState({calculatedValue: this.props.config.value})
    }
  },

  updateMin: function (value) {
    var newVal = value
    if (newVal >= 0) {
      updateSliderMin(newVal)
    }
  },
  updateMax: function (value) {
    var newVal = value
    if (newVal >= 0) {
      updateSliderMax(newVal)
    }
  },
  updateValue: function (value) {
    var newVal = value
    if (newVal >= 0) {
      updateSliderValue(newVal)
    }
  },

  handleSliderChange: function (value, position) {
    updateSliderValue(value)
  },

  updateBool: function (key) {
    return (value) => {
      this.setState({ [key]: value })
    }
  },

  render: function () {
    var markers = this.state.displayMarkers === 1 ? [
      {value: Math.floor(this.props.config.min + (this.props.config.max - this.props.config.min) / 3), label: 'foo'},
      {value: Math.floor(this.props.config.min + 2 * (this.props.config.max - this.props.config.min) / 3), label: 'bar'}]
      : []
    var markersText = ''

    for (var i in markers) {
      if (markersText !== '') {
        markersText += ', '
      }
      markersText += markers[i].value + ' : \"' + markers[i].label + '\"'
    }
    return (
      <div className='slider-demo'>
        <div className='controls'>
          <h2>Props</h2>
          <ul className='proplist'>
            <li className='proplist__item'>
              <div className='prop-text'>
                <label className='prop-text__label'>Sigal while dragging</label>
                <p className='prop-text__value'>{this.state.triggerOnChangeWhileDragging === 1 ? 'True' : 'False'}</p>
              </div>
              <Slider min={0} max={1} value={this.state.triggerOnChangeWhileDragging} onChange={this.updateBool('triggerOnChangeWhileDragging')} />
            </li>
            <li className='proplist__item'>
              <div className='prop-text'>
                <label className='prop-text__label'>Minimum</label>
                <p className='prop-text__value'>{this.props.config.min}</p>
              </div>
              <Slider min={0} max={this.props.config.max} value={this.props.config.min} showValue={false} onChange={this.updateMin} />
            </li>
            <li className='proplist__item'>
              <div className='prop-text'>
                <label className='prop-text__label'>Maximum</label>
                <p className='prop-text__value'>{this.props.config.max}</p>
              </div>
              <Slider min={this.props.config.min} max={400} value={this.props.config.max} showValue={false} onChange={this.updateMax} />
            </li>
            <li className='proplist__item'>
              <div className='prop-text'>
                <label className='prop-text__label'>Show Ticks</label>
                <p className='prop-text__value'>{this.state.ticks === 1 ? 'True' : 'False'}</p>
              </div>
              <Slider min={0} max={1} value={this.state.ticks} onChange={this.updateBool('ticks')} />
            </li>
            <li className='proplist__item'>
              <div className='prop-text'>
                <label className='prop-text__label'>Show Following Label</label>
                <p className='prop-text__value'>{this.state.displayFollowerPopover === 1 ? 'True' : 'False'}</p>
              </div>
              <Slider min={0} max={1} value={this.state.displayFollowerPopover} onChange={this.updateBool('displayFollowerPopover')} />
            </li>
            <li className='proplist__item'>
              <div className='prop-text'>
                <label className='prop-text__label'>Show Markers</label>
                <p className='prop-text__value'>{this.state.displayMarkers === 1 ? 'True' : 'False'}</p>
              </div>
              <Slider min={0} max={1} value={this.state.displayMarkers} onChange={this.updateBool('displayMarkers')} />
            </li>
          </ul>
        </div>
        <div className='content'>
          <h1>NW-React-Slider</h1>

          <div className='slider-container'>
            <p className={classnames('slider-value', (this.state.displayMarkers ? 'markers-showing' : ''))}>{this.props.config.value}</p>
            <Slider
              displayFollowerPopover={this.state.displayFollowerPopover === 1}
              min={this.props.config.min}
              max={this.props.config.max}
              value={this.props.config.value}
              onChange={this.handleSliderChange}
              ticks={this.state.ticks === 1}
              triggerOnChangeWhileDragging={this.state.triggerOnChangeWhileDragging === 1}
              markerLabel={markers}/>
          </div>
          <div className='jsx'>
            <p className='jsx__label'>your.jsx</p>
            <div className='code'>
              <p className='code__text'>&lt;Slider</p>
              <p className='code__text code__text--indent'>value={'{' + this.props.config.value + '}'}</p>
              <p className='code__text code__text--indent'>min={'{' + this.props.config.min + '}'}</p>
              <p className='code__text code__text--indent'>max={'{' + this.props.config.max + '}'}</p>
              <p className='code__text code__text--indent'>onChange={'{function(){}}'}</p>
              <p className='code__text code__text--indent'>{`triggerOnChangeWhileDragging={${this.state.triggerOnChangeWhileDragging === 1}}`}</p>
              {this.state.ticks === 1 && <p className='code__text code__text--indent'>ticks</p>}
              {this.state.displayFollowerPopover === 1 && <p className='code__text code__text--indent'>displayFollowerPopover</p>}
              <p className='code__text code__text--indent'>markerLabel=&#123;&#91;{markersText}&#93;&#125;/&gt;</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

})
module.exports = Index

var render = function () {
  ReactDOM.render(<Index config={fakeStore}/>, document.getElementById('root'))
}
render()
