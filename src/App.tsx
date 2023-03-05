import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodoContainer';

const App: React.FC = () => {
  return (
    <div>
      <CounterContainer />
      <TodoContainer />
    </div>
  );
};

export default App;
