import { Outlet, useNavigate } from "react-router-dom";

import routes from "@constants/routes";

//component
import Link from "@components/common/Link";
// import AvatarUser from "@components/common/Avatar";

import { useAppDispatch, useAppSelector } from "@redux/hook";
import { setAuth } from "@redux/slices/auth";
// import { Button } from "@components/ui/button";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: any) => state.user?.user);

  const handleLogout = () => {
    dispatch(setAuth(null));
    navigate("/");
  };

  return (
    <div className="h-screen">
      <header className="flex  items-center justify-between gap-6 py-4 px-4">
        <div className="flex items-center gap-6">
          {routes.map((route: any, index: number) => (
            <Link key={`link-${index}`} link={route} />
          ))}
        </div>

        <div className="flex items-center gap-6">
          {/* <div className="flex items-center gap-2 hover:cursor-pointer">
            <AvatarUser />
            <p>{user?.username}</p>
          </div>
          <Button onClick={handleLogout} className="hover:cursor-pointer">
            Logout
          </Button> */}
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
