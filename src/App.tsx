import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Nav from "./components/Nav";
// import { SWRConfig } from "swr";

// type Cache<RecipeAPIResponse> = {
//   get(key: string): RecipeAPIResponse | undefined;
//   set(key: string, value: RecipeAPIResponse): void;
//   delete(key: string): void;
// };

//could do router for different funcs
//mock api?
//questionnnaire type thing?

const App: React.FC = () => {
  return (
    // <SWRConfig value={{ provider: () => new Map() }}>
    <Router>
      <Nav />
      <AppRoutes />
    </Router>
    // </SWRConfig>
  );
};

export default App;
