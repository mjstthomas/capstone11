import React from "react";
import { Route } from "react-router-dom";
// import LandingPage from './Routes/LandingPage';
import SignUp from './Routes/signup';
import Login from "./Routes/login";
import BizDash from './Routes/Business/BizDash/BizDash';
import Search from "./Routes/Business/Search/Search";
// import Results from './Routes/Business/Results';
// import FLProfile from './Routes/Business/FLProfile';
// import MakeOffer from './Routes/Business/MakeOffer';
// import BizOffersDash from './Routes/Business/BizOffersDash';
import FreelanceDash from './Routes/Freelance/FreelanceDash/FreelanceDash';
// import OffersPage from './Routes/Freelance/OffersPage';
// import Offer from './Routes/Freelance/Offer';

import AppContext from "./AppContext";
import "./App.css";

class App extends React.Component {
  state = {
    MustHaveSkills: [{ level: "", skill: "" }],
    NiceToHaveSkills: [{ level: "", skill: "" }],
  };

  setLevel = (level, index, typeOfSkill) => {
    const prevState = this.state;
    prevState[typeOfSkill][index].level = level;
    this.setState(prevState);
  };

  setSkill = (skill, index, typeOfSkill) => {
    const prevState = this.state;
    prevState[typeOfSkill][index].skill = skill;
    this.setState(prevState);
  };

  addSkill = (e) => {
    let typeOfSkill = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML
      .split(" ")
      .join("");
    typeOfSkill = typeOfSkill + "Skills";
    const prevState = this.state;
    prevState[typeOfSkill].push({ level: "", skill: "" });
    this.setState(prevState);
  };

  removeSkill = (index, typeOfSkill) => {
    const prevState = this.state;
    prevState[typeOfSkill].splice(index, 1);
    this.setState(prevState);
  };

  testContext = () =>{
    console.log('well it worked')
  }
  render(props) {
    let context = {
      testContext: this.testContext,
      removeSkill: this.removeSkill,
      addSkill: this.addSkill,
      setSkill: this.setSkill,
      setLevel: this.setLevel
    };
    return (
      <AppContext.Provider value={context}>
        <div className="App">
        {/* {<Route path='/' exact component={LandingPage} />} */}
          <Route path='/SignUp' exact component={SignUp} /> 
          <Route path="/Login" exact component={Login} />
          <Route path='/Business' exact component={BizDash} />
          <Route
            path="/Business/Search"
            render={(props) => (
              <Search
                MustHaveSkills={this.state.MustHaveSkills}
                NiceToHaveSkills={this.state.NiceToHaveSkills}
                setLevel={this.setLevel}
                setSkill={this.setSkill}
                addSkill={this.addSkill}
                removeSkill={this.removeSkill}
              />
            )}
          />
          {/* <Route path='/Business/Results' exact component={Results} />
        <Route path='/Business/Results/:freelanceID' exact component={FLProfile} />
        <Route path='/Business/Results/:freelanceID/MakeOffer' exact component={MakeOffer} />
            <Route path='/Business/BizOffersDash' exact component={BizOffersDash} />*/}
        <Route path='/Freelancer' exact component={FreelanceDash} />
        {/*<Route path='/Freelancer/OffersPage' exact component={OffersPage} />
        <Route path='/Freelancer/OffersPage/:offerId' exact component={Offer} /> */}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
