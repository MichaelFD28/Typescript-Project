import React from "react";
import { NavLink } from "react-router-dom";

import { appPaths } from "../Routes";

const Nav: React.FC = () => {
  let activeClassName = "underline text-indigo-800 dark:text-indigo-500";
  return (
    <div className="w-full flex flex-row items-center justify-center fixed top-0 dark:text-white">
      <div className="p-4 space-x-6 text-xl font-semibold  ">
        <NavLink
          to={appPaths.todos}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Todos
        </NavLink>
        <NavLink
          to={appPaths.signup}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Form
        </NavLink>
        <NavLink
          to={appPaths.recipeAPI}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Recipes
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
