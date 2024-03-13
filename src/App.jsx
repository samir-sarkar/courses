// import { 
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider
// } from "react-router-dom";

import Home from "./Pages/Home/Home";
// import Layout from "./Components/Layout/Layout";

import './App.scss';



// const router = createBrowserRouter(
//   createRoutesFromElements (
//     <Route path="/" element= {<Layout />} >
//       <Route path="" element={<Home />} />
//     </Route>
//   )
// );

const App = () => {
  return (
    // <RouterProvider router={router} />
    <Home />
  )
}

export default App;