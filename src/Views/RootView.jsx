import { Outlet } from "react-router-dom"
import Hearder from "../Components/Headers.jsx/Hearder"

const RootView = () => {
  return (
    <>
     <Hearder/>
     <main className="container my-3 flex-grow-1">
        <Outlet />


     </main>
     <footer>Este es el footer</footer>
    </>
  )
}
export default RootView