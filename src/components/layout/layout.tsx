import {Outlet} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Path from '../path/path';

const Layout = (): JSX.Element => (
  <>
    <Path />
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
);


export default Layout;
