import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const location = useLocation();
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
      path: "/blog",
      linkName: "blog",
    },
    {
      path: "/contact",
      linkName: "contact",
    },
  ];
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
          </ul>
          <div className="md:border-l-2 md:border-r-0 border-r-2 border-orange-400">
            <Link
              to={`${
                location.pathname === "/sign-in" ? "/sign-up" : "/sign-in"
              }`}
              className="btnStyle md:ml-4 md:mr-0 mr-4"
            >
              {location.pathname === "/sign-in" ? "sign up" : "sign in"}
            </Link>
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
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
