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
          <Link to= "/practiceproject">Practice Project</Link>
        </li>
        <li>
          <Link to= "/addstudent">Add Student</Link>
        </li>
        <li>
          <Link to= "/onchange">On Change</Link>
        </li>
        <li>
          <Link to= "/task">Task</Link>
        </li>
        <li>
          <Link to ="/colorpicker"> Color Picker</Link>
        </li>
        <li>
          <Link to="/colck">Clock App</Link>
        </li>
        <li>
          <Link to="/theme"> Theme Project</Link>
        </li>
        <li>
           <Link to= "/useref">UseRef</Link>
        </li>
        </ul>
      </nav>
    </header>
    
  );
}
export default Header;