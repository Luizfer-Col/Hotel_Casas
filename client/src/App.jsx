import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/store/store";
import Header from "./components/Home/Header/Header";
import Register from "./components/Home/Register/Register";
import Login from "./components/Home/Login/Login";
import Rooms from "./components/Rooms/Rooms";
import Reserve from "./components/Reserve/Reserve";
import Account from "./components/Account/Account";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <>
          {/* <div>
          </div> */}
          <div className="main-container">
            <Header />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/my-reservations" element={<Account />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/reserve" element={<Reserve />} />
            </Routes>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
