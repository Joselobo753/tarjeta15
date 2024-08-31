import { Outlet } from "react-router-dom"
import Hearder from "../Components/Headers.jsx/Hearder"

const RootView = () => {
  return (
    <>

     <main className="container my-3 flex-grow-1">
        <Outlet />


     </main>
     <footer>Te espero</footer>
    </>
  )
}
export default RootView