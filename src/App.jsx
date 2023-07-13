import Logo from "./components/Logo/Logo";
import "./components/MainStyle/nullStyle.css";
import "./components/MainStyle/MainStyle.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavMessageContainer from "./components/navMessage/navMessageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Logo />
        <div className="content">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<NavMessageContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
