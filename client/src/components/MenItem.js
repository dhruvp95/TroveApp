import React, { Component } from 'react';

class MenItem extends Component {
  render() {
    return (
      <div>
        {!this.props.passItem ? null : this.props.passItem.sex === 'M' ?
        this.props.passItem.itemname : null }
      </div>
    );
  }
}


export default MenItem;