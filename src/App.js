import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter/index";
import Students from "./components/students/Students";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>   
        <div>
          <Route exact path = "/counter" component = {Counter}/>
          <Route exact path = "/students" component = {Students}/>
        </div>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
