import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Family from './components/Family';
import CreateFamily from './components/CreateFamily';

const App: React.FC = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/family/:id' component={Family} />
      <Route exact path='/createfamily' component={CreateFamily} />
    </Layout>
  );
/*  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/  
}

export default App;
