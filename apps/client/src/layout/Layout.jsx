import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
