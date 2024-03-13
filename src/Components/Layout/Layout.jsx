import { Outlet } from "react-router-dom"


const Layout = () => {
  return <>
    {/* <header><h1>Layout Header</h1></header> */}
    <Outlet />
    {/* <footer><h1>Layout footer</h1></footer> */}
  </>
}

export default Layout