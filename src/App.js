import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SelectLogin from "./pages/SelectLogin";
import "./App.css";
import PrivateRoute from "./util/PrivateRoute";
import ScannerPrivateRoute from "./util/ScannerPrivateRoute";
import ScanningPage from "./pages/ScanningPage";
import ExaminarPage from "./pages/ExaminarPage";
import SendResult from "./pages/SendResult";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="select-login" element={<SelectLogin />} />
          <Route exact path="/" element = {<ScannerPrivateRoute/>}>
            <Route path="scan-qr" element={<ScanningPage />} />
          </Route>
            <Route path="examinar" element={<ExaminarPage />} />
            <Route path="send-result" element={<SendResult />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
