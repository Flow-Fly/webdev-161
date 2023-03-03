import { Outlet } from "react-router-dom";

export default function Layout() {
  return <div>
    <p>Hello User</p>

    <Outlet />
  </div>
    ;
}