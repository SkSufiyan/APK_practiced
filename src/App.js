// import logo from './logo.svg';
import './App.css';
// import { CourseInfo } from './Component/CourseInfo';
// import {Layout} from './Layout/Layout'
// import {ToggleComps} from './ToggleComps/ToggleComps';
// import {EMICalc} from './EMICalc/EMICalc'
// import {Codepaino} from './Codepaino/Codepaino'
import "bootstrap/dist/css/bootstrap.min.css";
// import {Card ,Row,Col} from "react-bootstrap"
// import {AudioPlayer} from "../src/Codepaino/AudioPlayer"
// import {Counter } from "./Component/Counter"
// import {EmpList} from "./ReducerEmployee/EmpList"
// import {Tabsmanger} from "./Tabsmanager/Tabsmanger"
// import {NavigationBar } from "./Component/NavigationBar"
// import {Home} from "./ROutes/Home"
// import {Services} from "./ROutes/Services"
// import {Aboutus} from "./ROutes/Aboutus"
// import {COntactus} from "./ROutes/COntactus"
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Cardscar} from "./CardsCar/Cardscar"
// import {Login} from "./Login/Login"
// import  {S} from  "./CardsCar/S"
// import {Clock} from "./CLock/Clock"
// import {Dictonary} from "./E-Dictonary/Dictonary"
import {Home} from"./EDictonary/Home"

function App() {
  return (
    <div  className="APP">
      <Home/>
      {/* <Dictonary/> */}
      {/* <S/>  */}
      {/* <Clock/> */}
       {/* <Counter/> */}
      {/* <Cardscar/>  */}
      {/* <Router>
      <NavigationBar/>
      <Switch>
      <div>
        
      <Route path="/Home">
      <Home/>
      </Route>
      <Route path="/Services">
      <Services/>
      </Route>
      <Route path="/Aboutus">
       <Aboutus/>
      </Route>
      <Route path="/COntactus">
      <COntactus/>
      </Route>
      <Route path="/login/Login">
        <Login/>
      </Route>
      </div>
      </Switch>
      </Router> */}
      {/* <Tabsmanger/> */}
      {/* <Counter/>   */}
     
      {/* <AudioPlayer/> */}
      {/* <EmpList/> */}
       
      {/* <Card className="A">
      <Row>
        <Col md={4}>
        <h1>LOW</h1>
          <Codepaino/>
          </Col>
            
          <Col md={4}>
          <h1 align="Center">MEDIUM</h1>
          <Codepaino/>
          </Col>
         <Col md={4}>
          <h1>HIGH</h1>
          <Codepaino/>
          </Col>
                 
      </Row>
      </Card> */} 
      {/* <Layout/>~ */}
      {/* <EMICalc/> */}
    </div>
  );
}

export default App;
