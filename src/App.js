
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contact from './pages/Contact/Contact';
import Loginpage from './pages/Login/Loginpage';
import { SearchExcavator, SearchWheelTractorScraper, SearchHarvester, SearchArticulatedHauler, SearchDrumRoller, SearchAsphaltPaver } from './pages/Search';
import React from 'react';
import "../src/App.css";

function App() {
  
  return (
    <>

   <Router>
    <Switch>
   <Route exact path="/" render={()=><Home/>}/>
   </Switch>
   
   <Switch>
   <Route exact path="/Login" render={()=><Loginpage/>}/>
   </Switch>
   
   <Switch>
   <Route exact path="/Contact" render={()=><Contact/>}/>
   </Switch>

   <Switch>
   <Route exact path="/SearchExcavator" render={()=><SearchExcavator/>}/>
   </Switch>

   <Switch>
   <Route exact path="/SearchWheelTractorScraper" render={()=><SearchWheelTractorScraper/>}/>
   </Switch>

   <Switch>
   <Route exact path="/SearchHarvester" render={()=><SearchHarvester/>}/>
   </Switch>

   <Switch>
   <Route exact path="/SearchArticulatedHauler" render={()=><SearchArticulatedHauler/>}/>
   </Switch>
   
   <Switch>
   <Route exact path="/SearchDrumRoller" render={()=><SearchDrumRoller/>}/>
   </Switch>
   
   <Switch>
   <Route exact path="/SearchAsphaltPaver" render={()=><SearchAsphaltPaver/>}/>
   </Switch>

  </Router>
    </>


  );
}

export default App;
