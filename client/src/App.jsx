import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/store/store";
import Header from "./components/Home/Header/Header";
import Register from "./components/Home/Register/Register";

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <Router>
        <div>
      <Routes>
        <Route index path = "/" element = {<Home />}/>
        <Route path = "/register" element = {<Register />}/>
      </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
