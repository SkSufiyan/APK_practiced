// import { CourseInfo } from './Component/CourseInfo';

import "bootstrap/dist/css/bootstrap.min.css";
// import { Login } from "./ROutes/Login/Login";
// import { NavigationBar } from "./Component/NavigationBar";
// import { Home } from "./ROutes/Home";
// import { Services } from "./ROutes/Services";
// import { Aboutus } from "./ROutes/Aboutus";
// import { COntactus } from "./ROutes/COntactus";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Counter } from "./Component/Counter";
// import { Home } from "./Dictionary/Home";
import { Clock } from "./Clock/Clock";
// import { DynamicCOmp } from "../src/Component/DynamicCOmp";
function App() {
  return (
    <div className="APP">
      {/* <DynamicCOmp /> */}
      {/* <Home /> */}
      <Clock />
      {/* <Counter /> */}
      {/* <Router>
        <NavigationBar /> */}

      {/* <Switch>
          <div>
            <Route path="/Home">
              <Home />
            </Route>
            <br />
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/Aboutus">
              <Aboutus />
            </Route>
            <Route path="/COntactus">
              <COntactus />
            </Route>
            <Route path="/login/Login">
              <Login />
            </Route>
          </div>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
