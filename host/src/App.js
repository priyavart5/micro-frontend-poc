import React from "react";
import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";
import "./App.css";

const {
  REACT_APP_CHAT_HOST: chat,
  REACT_APP_EMAIL_HOST: email
} = process.env;

const Chat = ({ history }) => (
  <MicroFrontend history={history} host={chat} name="chat" />
);
const Email = ({ history }) => (
  <MicroFrontend history={history} host={email} name="email" />
);

const Host = () => (
  <>
    <div className="App">
      <header className="App-header">
        <h3>Host Application</h3>
      </header>
    </div>
  </>
);

const App = (props) => {
  return (
    <BrowserRouter>
      <div style={{ padding: 25, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20
            }}
            to="/"
          >
            Host
          </NavLink>
        </div>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20
            }}
            to="/chat"
          >
            chat
          </NavLink>
        </div>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20
            }}
            to="/email"
          >
            email
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Host />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;