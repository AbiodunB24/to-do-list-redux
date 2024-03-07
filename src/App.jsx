// App.js
import React from 'react';
import './App.css';
import { Provider, createStoreHook } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './redux/reducers'; // Importing the tasksReducer.
import AddTask from './components/Addtask'; // Importing the AddTask component.
import ListTask from './components/ListTask'; // Importing the ListTask component.
import bg from "./assets/ekaterina-novitskaya-KugwNl9jX1Q-unsplash.jpg"

const store = createStore(tasksReducer); // Creating the Redux store with the tasksReducer.

const App = () => {
  return (
    <Provider store={store}> {/* Providing the Redux store to the entire application */}
      <div style={{ backgroundImage: `url(${bg})` }} className='h-screen bg-cover '>
       
        <AddTask />
        
      </div>
    </Provider>
  );
};

export default App;
