import React from "react";
import ReactDOM from "react-dom/client";
import Center from "centa";

const rootElement = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

rootElement.render(
  <React.StrictMode>
    <Center>
      <h1>This element will be at the center</h1>
    </Center>
  </React.StrictMode>
);
