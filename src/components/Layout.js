import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <header className="header">
    <Navbar />
    <Outlet />
  </header>
);
export default Layout;
