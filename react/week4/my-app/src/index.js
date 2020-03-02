import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./components/User";

import App from "./App";

const Context = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Context />, rootElement);
