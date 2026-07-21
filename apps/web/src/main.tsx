import { RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/root';
import { Error } from './pages/error';
import { Detail } from './pages/detail';
import { Edit } from './pages/edit';
import { Create } from './pages/create';
import { rootLoader } from './routes/root.loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error/>,
    // loader: rootLoader,
  },
    {
      path: '/notes/:id',
      element: <Detail/>,
    },
    {
      path: '/notes/:id/edit',
      element: <Edit/>,
    },
    {
      path: '/notes',
      element: <Create/>,
    }
]);

root.render(<RouterProvider router={routes} />);
