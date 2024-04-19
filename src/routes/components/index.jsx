import "./index.css";
import Sidebar from "./component/Sidebar";
import { Outlet } from "react-router-dom";

const Components = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Components;
