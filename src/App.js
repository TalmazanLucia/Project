import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routeItems } from './shared/config';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routeItems} />
    </div>
  );
}

export default App;
