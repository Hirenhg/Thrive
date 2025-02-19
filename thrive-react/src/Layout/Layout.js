import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Dashboard from "../pages/Dashboard/Dashboard";

const Layout = () => {
  return (
    <div className="layout_main">
      {/* <div className="flex">
        <div className="flex-auto p-6">
          <Outlet />
        </div>
      </div> */}
      <div class="page bg-gray-100 min-vh-100">
          <main>
              <Header />
              <div class="container mw-sm-960 p-0 p-sm-4">
                <Dashboard/>
              </div>
          </main>
      </div>
    </div>
  );
};

export default Layout;
