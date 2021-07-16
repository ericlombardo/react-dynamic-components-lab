import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return this.props.opacity < 0.2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={parseFloat((this.props.opacity - 0.1).toFixed(1))} />  
      </div>
    )
  }

}

