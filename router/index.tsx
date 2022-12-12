import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
// import routerConfig from './routerConfig';
import Layout from './Layout';

const Home = React.lazy(() => import('../src/Home'));
const TestSWR = React.lazy(() => import('../src/TestSWR'));

// const lazyLoadingRoutes = routerConfig.map(({ path, component: Component }) => (
//   <Route
//     path={path}
//     element={
//       <React.Suspense fallback={<>...</>}>
//         <Component />
//       </React.Suspense>
//     }
//     key={path}
//   />
// ));

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="home"
          element={
            <React.Suspense fallback={<div>...</div>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="testSwr"
          element={
            <React.Suspense fallback={<div>...</div>}>
              <TestSWR />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
