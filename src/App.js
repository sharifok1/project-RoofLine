import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/MainAbout/About";
import Home from "./Pages/Home/MainHome/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from './Pages/Contexts/AuthProvider/AuthProvider'

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
