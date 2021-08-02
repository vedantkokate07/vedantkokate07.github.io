import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// layouts
import Profile from "./views/ProfilePage/ProfilePage"
import Project from "./views/ProjectPage/ProjectPage"
import Experience from "./views/Experience/ExperiencePage"
import Awards from "./views/Awards/AwardsPage"
//

// ----------------------------------------------------------------------

export default function Rout() {return(<Router>
    <Switch>
      <Route path="/experience-page">
        <Experience />
      </Route>
      <Route path="/project-page">
        <Project />
      </Route>
      <Route path="/awards-page">
        <Awards />
      </Route>
      <Route path="/">
        <Profile />
      </Route>
    </Switch>
 
</Router>);
    
	
}
