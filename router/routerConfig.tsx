import React, { lazy } from 'react';

const Home = lazy(() => import('../src/Home'));
const TestSWR = lazy(() => import('../src/TestSWR'));

const fallback = <div>loading...</div>;

const routerConfig = [
  {
    path: '/home',
    title: '首页',
    // component: Home,
  },
  {
    path: '/testSwr',
    title: '测试swr',
    // component: TestSWR,
  },
];

export default routerConfig;
