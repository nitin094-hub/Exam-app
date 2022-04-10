import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SelectLogin from "./pages/SelectLogin";
import "./App.css";
import PrivateRoute from "./util/PrivateRoute";
import ScanQr from "./pages/ScanQr";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route  path="select-login" element={<SelectLogin />} />
          <Route  path="scan-qr" element={<ScanQr />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
