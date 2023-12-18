import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

// pour utiliser bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return(
      <BrowserRouter>
        <nav className="m-1 p-1 border border-info">
          <ul className="nav nav-pills">
            <li>
              <Link className="btn btn-outline-info ms-1" to={"/Home"}>Home</Link>
            </li>
            <li>
              <Link className="btn btn-outline-info ms-1" to={"/Products"}>Products</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Products" element={<Products/>}></Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
