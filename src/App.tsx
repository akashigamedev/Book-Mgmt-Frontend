import { useEffect } from "react";
import { Route, Routes } from "react-router";

// Pages
import Homepage from "./globals/pages/Homepage";

function App() {
  useEffect(() => {
    document.body.classList.toggle("dark-mode", true);
  }, []);

  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/" element={<Homepage />} />
      <Route />
    </Routes>
  );
}

export default App;
