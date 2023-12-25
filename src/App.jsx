import React from "react";
import Header from "./Header.jsx";
import { createRoot } from "react-dom/client";

const App = () => {
  return <Header />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
