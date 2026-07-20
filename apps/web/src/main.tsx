import { RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/root';
import { Error } from './pages/error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error/>
  },
]);

root.render(<RouterProvider router={routes} />);
