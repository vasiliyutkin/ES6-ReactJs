import React from 'react';

export default React.createClass({
  getInitialState: function() {
        return {
            hh: new Date().getHours(),
            mm: new Date().getMinutes(),
            ss: new Date().getSeconds(),
            time: function() {

                if ( this.hh < 10 ) {
                    this.hh = '0' + this.hh;
                };

                if ( this.mm < 10 ) {
                    this.mm = '0' + this.mm;
                };

                if ( this.ss < 10 ) {
                    this.ss = '0' + this.ss;
                };

                var time = this.hh + ' : ' + this.mm + ' : ' + this.ss;

                return time;

            }
        };
  },
  _goTimer: function() {
        setInterval(this._tick, 1000)
  },
  _tick: function() {
      this.setState({
            hh: new Date().getHours(),
            mm: new Date().getMinutes(),
            ss: new Date().getSeconds()
        });
  },
  componentDidMount: function() {
    this._goTimer();
  },
  render() {
    return (
      <div>
        <p><span className='time'>{this.state.time()}</span></p>
      </div>
    );
  }
});