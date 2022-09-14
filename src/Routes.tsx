import { Routes, Route } from "react-router-dom";
import Todos from "./pages/Tasks";
import SignUp from "./pages/SignUp";
import RecipeAPI from "./pages/RecipeAPI";

export const appPaths = {
  todos: "/",
  signup: "/signup",
  recipeAPI: "/recipeapi",
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={appPaths.todos} element={<Todos />} />
      <Route path={appPaths.signup} element={<SignUp />} />
      <Route path={appPaths.recipeAPI} element={<RecipeAPI />} />
    </Routes>
  );
};

export default AppRoutes;
