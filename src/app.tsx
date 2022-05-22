import type { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';

import { routes } from './routes';
import Layout from './components/layout';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <Layout>
      <Route />
    </Layout>
  );
};

export default App;
