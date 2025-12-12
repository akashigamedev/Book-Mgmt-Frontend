import { useEffect } from "react";
import Router from "./router/Router";
import GlobalToast from "./globals/components/GlobalToast";

function App() {
  useEffect(() => {
    document.body.classList.toggle("dark-mode", true);
  }, []);

  return (
    <>
      <Router />
      <GlobalToast />
    </>
  );
}

export default App;
