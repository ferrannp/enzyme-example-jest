import React from 'react';

import Foo from './Foo';

const MyComponent = React.createClass({
  
  getInitialState() {
    return {
      status: false
    };
  },
  
  changeStatus() {
    this.setState({status: !this.state.status})
  },
  
  render() {
    return (
      <section>
        <h1>My Component</h1>
        <Foo />
        <Foo />
        <Foo />
        <button onClick={this.changeStatus} />
        <p>Status is {this.state.status ? 'On' : 'Off'}</p>
      </section>
    );
  }
});

export default MyComponent;
