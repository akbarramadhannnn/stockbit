import { Switch, Route } from 'react-router-dom';
import Routes from './routes';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <Switch>
        {Routes.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Layout>
  );
}

export default App;
