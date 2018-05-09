import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../App.css';

class List extends Component {
  render() {
    const list = ['A', 'B', 'C', 'D']
    return (
      <div className="list">
        <ol>
            {
                list.map((item, index) =>
                    (
                        <li key={index}>  <Link to={'/content:' + index} className="App-link"> {item}</Link></li>
                    )
                )
            }
        </ol>

      </div>
    );
  }
}

export default List;
