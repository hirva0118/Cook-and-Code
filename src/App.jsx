import { useState } from 'react';
import { Images } from './assets/Images';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routesConfig';
import Layout from './Layout';
import Cards from './Component/Cards';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {routes.map(
        ({ path, component: Component, isProtected }, index, cardData) => (
          <Route
            key={index}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        )
      )}
    </Routes>
  );
}

export default App;
