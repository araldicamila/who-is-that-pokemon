import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter basename="/who-is-that-pokemon">
      <Routes />
    </BrowserRouter>
  );
}

export default App;
