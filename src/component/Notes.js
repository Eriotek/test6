import React from 'react';
import './Notes.css'

export class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [1, 2]
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <aside className="Notes">
        {this.state.notes.map((key) => {
          return <div className="note">
            <div className="belka"></div>
            <textarea type="text"/>
          </div>
        })}
      </aside>
    );
  }
}