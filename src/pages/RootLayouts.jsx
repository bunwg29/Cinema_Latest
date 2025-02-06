import { Outlet } from "react-router-dom"
import Header from "@components/Header"

function RootLayouts() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
export default RootLayouts