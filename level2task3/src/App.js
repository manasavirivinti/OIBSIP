import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import RootLayout from './Components/RootLayout';
function App() {
  const browserRouter=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/Navbar",
          element:<Navbar />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router ={browserRouter} />
    </div>
  );
}

export default App;
