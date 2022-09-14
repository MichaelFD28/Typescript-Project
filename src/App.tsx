import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Nav from "./components/Nav";

//could do router for different funcs
//new one with swr?
//mock api?
//questionnnaire type thing?

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <AppRoutes />
    </Router>
  );
};

export default App;
