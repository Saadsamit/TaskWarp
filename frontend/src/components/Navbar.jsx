import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { myAuthProvider } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const location = useLocation();
  const { user,logoutUser } = useContext(myAuthProvider);
  const links = [
    {
      path: "/",
      linkName: "home",
    },
    {
      path: "/about",
      linkName: "about",
    },
    {
      path: "/contact",
      linkName: "contact",
    },
  ];
  const handleLogout = ()=>{
    logoutUser().then(()=>{
      toast.success("Sign out Successfully");
    }).catch(() => {
          toast.error("fail to Sign out");
        });
  }
  const route = links.map((item, idx) => (
    <li key={idx}>
      <NavLink
        to={item?.path}
        className={`capitalize hover:bg-orange-300 hover:text-white`}
      >
        {item?.linkName}
      </NavLink>
    </li>
  ));
  const dashboard = (
    <li>
      <NavLink
        to={"/dashboard"}
        className={`capitalize hover:bg-orange-300 hover:text-white`}
      >
        dashboard
      </NavLink>
    </li>
  );
  const priveteLink = user ? dashboard : "";
  return (
    <Container>
      <div className="navbar bg-base-100" id="Navbar">
        <div className="navbar-start">
          <Link
            to={"/"}
            className="btn btn-ghost sm:px-4 px-0 sm:text-2xl text-lg outline-none hover:bg-white text-orange-500"
          >
            TaskWarp
          </Link>
        </div>
        <div className="navbar-end md:flex">
          <ul className="menu menu-horizontal md:flex flex-nowrap hidden gap-4 px-1">
            {route}
            {priveteLink}
          </ul>
          <div className="md:border-l-2 md:border-r-0 border-r-2 border-orange-400">
            <div className="md:ml-4 md:mr-0 mr-4">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {user.photoURL ? (
                        <img src={user.photoURL} />
                      ) : (
                        <div className="flex justify-center items-center h-full">
                          <CgProfile className="text-2xl"></CgProfile>
                        </div>
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">{user?.displayName}</a>
                    </li>
                    <li onClick={handleLogout}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to={`${
                    location.pathname === "/sign-in" ? "/sign-up" : "/sign-in"
                  }`}
                  className="btnStyle"
                >
                  {location.pathname === "/sign-in" ? "sign up" : "sign in"}
                </Link>
              )}
            </div>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-2 mt-3 z-[1] gap-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {route}
              {priveteLink}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
