import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';

/** Renders App with Nav and Routes for Jobly */

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>

    </div>
  );
}

export default App;
