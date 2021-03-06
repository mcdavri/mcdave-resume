import React from "react";
import {Switch, Route} from "react-router-dom";


import LandingPage from "./landingPage";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/aboutme" component={AboutMe} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects"  component={Projects}  />
    </Switch>
)

export default Main;