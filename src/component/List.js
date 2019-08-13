import React from 'react';
import './list.css'

export class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentWillMount() {
    fetch('./links.json')
      .then(data => data.json())
      .then(links => this.setState(links))
      .catch(e => window.alert(e));
  }

  render() {
    const { links }= this.state;

    return (
      <section className="list">
        {links.map((key, i) => {
          return <ul key={i}>
            <span className='title'>{key.title}:</span>
            {key.links.map((link, i) => {
              return <li key={i}><a href={link.link}>{link.name}</a></li>
            })}
          </ul>
        })}
      </section>
    );
  }
}