import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

import "./style.css";
// import './App.css';
import Books from "./Pages/Books";
import Adding from "./Pages/Adding";
import Updating from "./Pages/Updating";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        
        <Books/>
      ),
    },
    {
      path: "/adding",
      element: (
        
       <Adding/>
      ),
    },
    {
      path: "/Updating/:id",
      element: (
        
       <Updating/>
      ),
    },
   
    
   
    
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
