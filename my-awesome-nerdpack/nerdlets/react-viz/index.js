import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class ReactVizNerdlet extends React.Component {
  state = {

    count: 0,

  };

//increment the count by 1

  increment = () => {

    this.setState((prevState) => ({

      count: prevState.count + 1,

    }));

  };

  //decrement the count by 1

  decrement = () => {

    this.setState((prevState) => ({

      count: prevState.count - 1,

    }));

  };
  reset = () => {

    this.setState((prevState) => ({

      count: 0,

    }));

  };

  render() {

    const { count } = this.state;

    return (

      <div class="container">

        <h1>Simple Counter</h1>

        <p>Count: {count}</p>

        <button onClick={this.increment} >Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <button onClick={this.reset} style={{ backgroundColor: 'red', color: 'black' }}>Reset</button>
        
      </div>

    );

  }
}
