// import logo from './logo.svg';
import './App.css';
// import { CourseInfo } from './Component/CourseInfo';
// import {Layout} from './Layout/Layout'
// import {ToggleComps} from './ToggleComps/ToggleComps';
// import {EMICalc} from './EMICalc/EMICalc'
// import {Codepaino} from './Codepaino/Codepaino'
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Card ,Row,Col} from "react-bootstrap"
// import {AudioPlayer} from "../src/Codepaino/AudioPlayer"
// import {Counter } from "./Component/Counter"
// import {EmpList} from "./ReducerEmployee/EmpList"
import {Tabsmanger} from "./Tabsmanager/Tabsmanger"
function App() {
  return (
    <div  className="APP">
      <Tabsmanger/>
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
