import React from 'react';
import './clock.css';
import moment from 'moment';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('HH:mm:ss')
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: moment().format('HH:mm:ss')
    });
  }


  render() {
    return (
      <div className="app-clock">
        {this.state.time}
      </div>
    );
  }
}