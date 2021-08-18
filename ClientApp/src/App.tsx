import { Route } from 'react-router';
import CreateFamily from './components/CreateFamily';
import Family from './components/Family';
import { Home } from './components/Home';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/family/:id" component={Family} />
      <Route exact path="/createfamily" component={CreateFamily} />
    </Layout>
  );
};

export default App;
