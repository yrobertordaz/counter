import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter/index";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./components/students";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/students" component={Students} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
