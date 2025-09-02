import React from "react";

const Navber = () => {
  const items = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Service",
      path: "/service",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto  px-0  ">
      <div className="navbar px-0 pt-2 bg-yellow-600 ">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu space-y-7  font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* nav item */}
              {items?.map((item, index) => (
                <li className=" pl-6 cursor-pointer text-[16px]" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost px-0 text-2xl">
            Tanim<span className="font-bold text-red-600">.</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-7 font-semibold  px-1">
            {/* nav items */}
            {items?.map((item, index) => (
              <li className="cursor-pointer text-[16px]" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#59c279] mr-4 rounded-full  text-white text-[16px]">
            Rusume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
