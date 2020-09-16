import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import SignUp from "./Routes/signup";
import Login from "./Routes/login";
import FLDetailForm from "./Routes/Freelance/FLProfileDetsForm/FLDetsForm";
import BizDash from "./Routes/Business/BizDash/BizDash";
import Search from "./Routes/Business/Search/Search";
import Results from './Routes/Business/Results/Results';
// import FLProfile from './Routes/Business/FLProfile';
// import MakeOffer from './Routes/Business/MakeOffer';
// import BizOffersDash from './Routes/Business/BizOffersDash';
import FreelanceDash from "./Routes/Freelance/FreelanceDash/FreelanceDash";
// import OffersPage from './Routes/Freelance/OffersPage';
// import Offer from './Routes/Freelance/Offer';
import userArray from './userArray';
import AppContext from "./AppContext";
import "./App.css";

class App extends React.Component {
  state = {

    user: {},
    userArray: [...userArray],
    AddSkills: [{ level: "", skill: "" }],
    MustHaveSkills: [{ level: "", skill: "" }],
    NiceToHaveSkills: [{ level: "", skill: "" }],
    error: '',
  };
  
  //Sign in / Sign Up functions
  signInUser = (user)=>{
    let newUser = this.state.userArray.find(item => user.userName == item.nickname && user.password == item.password);
    if (newUser == null){
     return this.setState({error: 'User Not Found'})
    }
     this.setState({user: newUser});
     return newUser;
  };

  signUpUser = (user) =>{
    user.id = this.state.userArray.length;
    if (user.profile === 'Freelancer'){
      user.profile = true;
    } else {
      user.profile = false;
    }
    const newUserArray = [...this.state.userArray, user];
    console.log(newUserArray)
    this.setState({userArray: newUserArray});
  }
  //Skill Search Functions
  deleteSkill = (skill) =>{
    const filteredSkillList = this.state.MustHaveSkills.filter(item => item.skill !== skill);
    const newSkills = [...filteredSkillList];
    this.setState({MustHaveSkills: newSkills});
  }
  setLevel = (level, index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill][index].level = level;
    this.setState(prevState);
  };

  setSkill = (skill, index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill][index].skill = skill;
    this.setState(prevState);
  };

  addSkill = (e) => {
    let typeOfSkill =
      e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0]
        .innerHTML;
    typeOfSkill = typeOfSkill.split(" ").join("");
    const prevState = { ...this.state };
    prevState[typeOfSkill].push({ level: "", skill: "" });
    this.setState(prevState);
  };

  removeSkill = (index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill].splice(index, 1);
    this.setState(prevState);
  };

  testContext = () => {
    console.log("well it worked");
  };
  render(props) {
    let context = {
      user: this.state.user,
      AddSkills: this.state.AddSkills,
      MustHaveSkills: this.state.MustHaveSkills,
      NiceToHaveSkills: this.state.NiceToHaveSkills,
      signInUser: this.signInUser,
      signUpUser: this.signUpUser,
      removeSkill: this.removeSkill,
      deleteSkill: this.deleteSkill,
      addSkill: this.addSkill,
      setSkill: this.setSkill,
      setLevel: this.setLevel,
      error: this.state.error
    };

    return (
      <AppContext.Provider value={context}>
        <main className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp/FLDetails" component={FLDetailForm} />
          <Route path='/Business' exact component={BizDash} />
          <Route path="/Business/Search" exact component={Search} />
          <Route path='/Business/Results' exact component={Results} />
        {/*<Route path='/Business/Results/:freelanceID' exact component={FLProfile} />
        <Route path='/Business/Results/:freelanceID/MakeOffer' exact component={MakeOffer} />
            <Route path='/Business/BizOffersDash' exact component={BizOffersDash} />*/}
          <Route path="/Freelancer" exact component={FreelanceDash} />
          {/*<Route path='/Freelancer/OffersPage' exact component={OffersPage} />
        <Route path='/Freelancer/OffersPage/:offerId' exact component={Offer} /> */}
        </main>
      </AppContext.Provider>
    );
  }
}

export default App;
