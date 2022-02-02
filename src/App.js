import Login from "./Components/form";
import "antd/dist/antd.css";
import Context from "./Context/context";
import Header from "./Components/Header/header";
import ShowForm from "./Components/ShowForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Context>
        <Router>
          <Header />
          <Routes>
            <Route path="home" element={<Login />} />
            <Route path="showform" element={<ShowForm />} />
          </Routes>
        </Router>
      </Context>
    </div>
  );
}

export default App;
