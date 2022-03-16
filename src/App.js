import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import GetApiMethod from "./APIsMethod/Get";
import Head from "./NavBar/Head";
import Home from "./CrudApp/Home";
import About from "./CrudApp/About";
import Contact from "./CrudApp/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Switch>
          <Route  path="/" element={<Home />} />
          <Route eaxct path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;




  //  <Route exact path="/users/add" component={AddUser} />
  //  <Route exact path="/users/edit/:id" component={EditUser} /> 
  //  <Route exact path="/users/:id" component={User} /> 
