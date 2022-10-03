import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home></Home> },
    { path: '/home', element: <Home></Home> },
    { path: '/about', element: <About></About> },
    { path: '/products', element: <Products></Products> }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}


export default App;
