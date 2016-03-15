import React from 'react';

export default React.createClass({
  getInitialState: function() {
        return {
            value: 1
        }
  },
  _valueRaiser: function() {
        this.setState({
            value: this.state.value + 1
        })
  },
  render() {
    return (
      <div>
        <h2>Description component value : <span className='val'>{this.state.value}</span></h2>
        <button onClick={this._valueRaiser}>Click Me</button>
      </div>
    );
  }
});