import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
    }
  }

  componentDidMount() {
    fetch('./links.json')
      .then(links => links.json())
      .then(x => console.log(x))
      .then(data => this.setState(data))
      .catch(e => window.alert(e));

  }

  ListComponent() {

  }
  render() {
    // const {links} = this.state;
    return (
      <div>
        {this.state.links.map( list => {
          <div>{list.title}</div>
          {list.links.map(link => {
            <li>{link}</li>
          })}

        })}

      </div>
    );
  }
}