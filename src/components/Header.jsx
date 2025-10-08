// import Props from "../pages/Props"
import { BrowserRouter as Router , Routes, Route , Link } from "react-router-dom";

function Header() {
  return (

    <header>
      <h1>React Topics to be done!</h1>
      <nav>
        <ul>

        <li>
           <Link to ="/props">Props</Link>
        </li>
        <li>
          <a href="#">React Hooks</a>
        </li>
        <li>
          <a href="#">Routing</a>
        </li>
        <li>
          <a href="#">State Management</a>
        </li>
        <li>
          <a href="#">API Intergration</a>
        </li>
        </ul>
      </nav>
    </header>
    
  );
}
export default Header;