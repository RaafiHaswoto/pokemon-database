import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search Pokemon"
            className="form-control mx-auto"
            style={{
              height: '1.75em',
              width: '70%',
              borderRadius: '14px',
              opacity: '0.5',
              fontSize: '1.8em',
              backgroundColor: 'white transparent'
            }}
          />
        </form>
      </div>
    );
  }
}
