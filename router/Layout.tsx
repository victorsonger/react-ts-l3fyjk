import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import routerConfig from './routerConfig';
import StyledButton from '../components/StyledButton';

const Layout = () => {
  return (
    <div>
      <div>
        {/* {routerConfig.map(({ title, path }) => (
          // <StyledButton key={path}>
          //   <Link to={path}>{title}</Link>
          // </StyledButton>
          <Link to={path} key={path}>
            {title}
          </Link>
        ))} */}
        <Link to="/home">home</Link>
        <Link to="/testSwr">testSwr</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
