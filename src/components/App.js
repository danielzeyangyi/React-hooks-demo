import React, { Component, useState } from 'react';
import ResouceList from './ResouceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResouceList resource={resource} />
    </div>
  );
};

export default App;
