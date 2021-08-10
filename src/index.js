import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'; // step 1 import 
import { Provider } from 'react-redux';
import reducer from './reducers';//step 3

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

const store = createStore(reducer); //Step 2
console.log(store.getState());//step 4 check it. 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Title />
        <DragonList />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
