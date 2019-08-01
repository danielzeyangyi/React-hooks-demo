import React, { Component } from 'react';

class App extends Component {
  state = {
    resouce: 'posts'
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resouce: 'posts' })}>
            Posts
          </button>
          <button onClick={() => this.setState({ resouce: 'todos' })}>
            Todos
          </button>
        </div>
        {this.state.resouce}
      </div>
    );
  }
}

export default App;
