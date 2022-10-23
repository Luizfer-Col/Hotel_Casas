import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/store/store";
import Header from "./components/Home/Header/Header";
import Register from "./components/Home/Register/Register";
import Login from "./components/Home/Login/Login";
import Rooms from "./components/Rooms/Rooms";
import Bar from "./components/Bar/Bar";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div>
          <div style={{ flex: 1 }}>
            <Header />
          </div>
          <div
            style={{
              // backgroundColor: "green",
              display: "flex",
              justifyContent: "center",
              // padding: 15,
              margin: 'auto',
              width: 1200
            }}
          >
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/bar" element={<Bar />} />
              {/* <Route exact path = "/register" element = {<Register />}/> */}
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
