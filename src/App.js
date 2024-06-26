import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; 
import Routers from "./Routers";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/home-two") {
      document.body.classList.add("home-two");
    } else if (location.pathname === "/") {
      document.body.classList.remove("home-two");
      document.body.classList.add("home-one");
    }
    document.body.classList.add("home-one");
    return () => {
      document.body.classList.remove("home-two");
      document.body.classList.add("home-one");
    };
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
