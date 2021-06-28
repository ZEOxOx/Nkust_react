import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import ProductDeletePage from 'src/pages/ProductDeletePage';
import ProductInsertPage from 'src/pages/ProductInsertPage';
import ProductUpdatePage from 'src/pages/ProductUpdatePage';
import OrderDetailInsertPage from 'src/pages/OrderDetailInsertPage';
import SalesOrderDeletePage from 'src/pages/SalesOrderDeletePage';
import SalesOrderUpdatePage from 'src/pages/SalesOrderUpdatePage';
import SalesOrderInsertPage from 'src/pages/SalesOrderInsertPage';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import SalesOrderList from 'src/pages/SalesOrderList';
import ReportPage from 'src/pages/ReportPage';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <SalesOrderList /> },
      { path: 'pDelete', element: <ProductDeletePage /> },
      { path: 'pInsert', element: <ProductInsertPage /> },
      { path: 'pUpdate', element: <ProductUpdatePage /> },
      { path: 'oDelete', element: <SalesOrderDeletePage /> },
      { path: 'oUpdate', element: <SalesOrderUpdatePage /> },
      { path: 'oInsert', element: <SalesOrderInsertPage /> },
      { path: 'dInsert', element: <OrderDetailInsertPage /> },
      { path: 'settings', element: <Settings /> },
      { path: 'report', element: <ReportPage /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Login /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
