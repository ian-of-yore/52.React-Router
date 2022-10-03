import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <div>This is Default Page</div>},
    {path: '/home', element: <div>This is Home Page</div>},
    {path: '/about', element: <div>This is about page</div>}
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}


export default App;
