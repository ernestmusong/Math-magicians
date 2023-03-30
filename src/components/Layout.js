import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <header data-testid="header" className="header">
    <Navbar />
    <Outlet />
  </header>
);
export default Layout;
