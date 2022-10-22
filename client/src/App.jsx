import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/store/store";
import Header from "./components/Home/Header/Header";
import Register from "./components/Home/Register/Register";
import Login from "./components/Home/Login/Login";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div>
      <Header />
      <Routes>
        <Route index path = "/" element = {<Home />}/>
        <Route exact path = "/register" element = {<Register />}/>
        <Route path = "/login" element = {<Login />}/>
        {/* <Route exact path = "/register" element = {<Register />}/> */}
      </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
