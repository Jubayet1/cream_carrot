import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Log In</a>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">CREAM CARROT</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a>
                <button>Log In</button>
              </a>
            </li>
            <li>
              <a>
                <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                  Sign Up
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
