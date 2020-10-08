import React from "react";
import { Route, withRouter } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import SignUp from "./Routes/signup";
import Login from "./Routes/login";
import FLDetailForm from "./Routes/Freelance/FLProfileDetsForm/FLDetsForm";
import BizDetailForm from "./Routes/Business/BizProfileDetsForm/BizDetsForm";
import EditBizProfile from "./Routes/EditBizProfile/EditBizProfile";
import EditFLProfile from "./Routes/EditFLProfile/EditFLProfile";
import BizDash from "./Routes/Business/BizDash/BizDash";
import Search from "./Routes/Business/Search/Search";
import Results from "./Routes/Business/Results/Results";
import BizProfile from "./Routes/Business/BizProfile/BizProfile";
import FLProfile from "./Routes/Freelance/FLProfile/FLProfile";
import MakeOffer from "./Routes/Business/MakeOffer/MakeOffer";
import BusinessOffersPage from "./Routes/Business/BusinessOffers/BusinessOffersPage";
import FreelanceOffersPage from "./Routes/Freelance/FreelanceOffers/FreelanceOffersPage";
import Messaging from "./Routes/Messaging/Messaging";
import AppContext from "./AppContext";
import AuthApiService from "./services/AuthApiService";
import ApiService from "./services/ApiService";
import TokenService from "./services/TokenService";
import PublicRoute from "./Utilis/PublicRoute";
import PrivateRoute from "./Utilis/PrivateRoute";
import "./App.css";

class App extends React.Component {
  state = {
    user: {
      id: null,
      nickname: "",
      profile: { id: null, profile: null },

      skills: [{ level: "", skill: "" }],
    },
    userProfile: { id: null, profile: null },
    headerToggle: false,
    isNav: false,
    resultArray: [],
    resultProfiles: [],

    MustHaveSkills: [
      { level: "", skill: "-" },
      { level: "", skill: "-" },
      { level: "", skill: "-" },
    ],
    AddSkills: [{ level: "", skill: "" }],
    error: "",
    EditSkills: [],
  };


  componentDidMount(){
    if (TokenService.hasIdToken()){
      const Id = TokenService.getIdToken();

      ApiService.importUser(Id)
        .then(result => result.json())
        .then(result =>{
          let skills = [];
            for (let i = 0; i < result.skills.length; i++) {
              let skillObj = { level: "", skill: "" };
              skillObj.level = result.level[i];
              skillObj.skill = result.skills[i];

              skills.push(skillObj);
            }
            const prevState = this.state;
            prevState.EditSkills = skills;
            this.setState(prevState);
          this.setState({
            user: result})
            console.log(this.state)
        })
    }
  }

  //Sign in / Sign Up functions

  signInUser = (user) => {
    const signedUser = {
      nickname: user.nickname,
      password: user.password,
    };
    AuthApiService.postLogin(signedUser)
      .then(res =>{
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveIdToken(res.id);
        TokenService.saveProfileToken(res.profile);
        this.setState({ userProfile: { id: res.id, profile: res.profile } });
        ApiService.importUser(res.id)
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            const { history } = this.props;
            let skills = [];
            for (let i = 0; i < res.skills.length; i++) {
              let skillObj = { level: "", skill: "" };
              skillObj.level = res.level[i];
              skillObj.skill = res.skills[i];

              skills.push(skillObj);
            }
            const prevState = this.state;
            prevState.EditSkills = skills;
            this.setState(prevState);
            this.setState({ user: res });
            if (this.state.userProfile.profile === true) {
              history.push("/Freelancer");
            }
            if (this.state.userProfile.profile === false) {
              history.push("/Business");
            }
          });
      })
      .catch((Error) => {
        setTimeout(() => {
          this.setState({error: ""});
        }, 10000);
        this.setState({error: "Wrong UserName or Password"});
      });
  };

  setNewUserProfile = (profile) => {
    const prevState = this.state;
    prevState.userProfile = profile;
    this.setState(prevState);
  };

  //Skill Search Functions

  deleteSkill = (skill) => {
    const newSkill = { level: "", skill: "-" }
    const mustHave = this.state.MustHaveSkills;
    const filteredSkillList = mustHave.filter((item) => item.skill !== skill);
    filteredSkillList.push(newSkill)
    this.setState({
      MustHaveSkills: filteredSkillList,
    });
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

  searchSkill = (skill, index, typeOfSkill) => {
    const prevState = this.state;
    prevState[typeOfSkill][index].skill = skill;
    this.setState(prevState);
  };

  addSkill = (skill) => {
    const prevState = this.state;
    prevState[skill].push({ level: "", skill: "" });
    this.setState(prevState);
  };

  removeSkill = (index, typeOfSkill) => {
    const prevState = this.state;
    prevState[typeOfSkill].splice(index, 1);
    this.setState(prevState);
  };

  resetSkills = () => {
    this.setState({
      MustHaveSkills: [{ level: "", skill: "" }],
    });
  };

  handleResult = (result) => {
    const prevState = this.state;
    prevState.resultArray = result;
    this.setState(prevState);
  };

  handleResultProfiles = (result) => {
    const prevState = this.state;
    prevState.resultProfiles.push(result);
    this.setState(prevState);
  };

  // handle Header

  setHeaderToggle = () => {
    const prevState = this.state;
    prevState.headerToggle = !prevState.headerToggle;
    this.setState(prevState);
  };

  setNav = () => {
    const prevState = this.state;
    prevState.isNav = !prevState.isNav;
    this.setState(prevState);
  };

  // make offer functions

  handleMakeOffer = (offer) => {
    const newArray = [...this.state.businessOffers, offer];
    this.setState({ businessOffers: newArray });
  };

  // handle adding details to freelance profile

  addFreelanceSkills = () => {
    for (let skill of this.state.AddSkills) {
      ApiService.addFreelanceSkill(
        this.state.userProfile.id,
        skill.skill,
        skill.level
      );
    }
  };

  saveFreelanceSkills = () => {
    for (let skill of this.state.user.skills) {
      ApiService.addFreelanceSkill(
        this.state.userProfile.id,
        skill.skill,
        skill.level
      );
    }
  };

  render(props) {
    let context = {
      user: this.state.user,
      userProfile: this.state.userProfile,
      headerToggle: this.state.headerToggle,
      isNav: this.state.isNav,
      AddSkills: this.state.AddSkills,
      EditSkills: this.state.EditSkills,
      MustHaveSkills: this.state.MustHaveSkills,
      resultArray: this.state.resultArray,
      resultProfiles: this.state.resultProfiles,
      signInUser: this.signInUser,
      setNewUserProfile: this.setNewUserProfile,
      setHeaderToggle: this.setHeaderToggle,
      setNav: this.setNav,
      resetSkills: this.resetSkills,
      removeSkill: this.removeSkill,
      deleteSkill: this.deleteSkill,
      addSkill: this.addSkill,
      addFreelanceSkills: this.addFreelanceSkills,
      saveFreelanceSkills: this.saveFreelanceSkills,
      searchSkill: this.searchSkill,
      setSkill: this.setSkill,
      setLevel: this.setLevel,
      handleResult: this.handleResult,
      handleResultProfiles: this.handleResultProfiles,
      handleMakeOffer: this.handleMakeOffer,
      error: this.state.error,
      newUserId: this.state.userProfile.id,
    };

    return (
      <AppContext.Provider value={context}>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Login" exact component={Login} />
          <PrivateRoute
            path="/SignUp/FLDetails"
            exact
            component={FLDetailForm}
          />
          <PrivateRoute path="/SignUp/BizDetails" component={BizDetailForm} />
          <PrivateRoute path="/Business" exact component={BizDash} />
          <PrivateRoute path="/Business/Search" component={Search} />
          <PrivateRoute
            exact
            path="/Business/Profile/:businessID"
            component={BizProfile}
          />
          <PrivateRoute
            exact
            path="/Freelancer/Profile/:freelanceID"
            component={FLProfile}
          />
          <PrivateRoute
            exact
            path="/Business/Profile/Edit/:businessID"
            component={EditBizProfile}
          />
          <PrivateRoute
            exact
            path="/Freelancer/Profile/Edit/:freelanceID"
            component={EditFLProfile}
          />
          <PrivateRoute path="/Business/Results" exact component={Results} />
          <PrivateRoute
            path="/Business/Results/:freelanceID"
            exact
            component={FLProfile}
          />
          <PrivateRoute
            path="/Business/Results/:freelanceID/MakeOffer"
            exact
            component={MakeOffer}
          />
          <PrivateRoute
            path="/Business/BusinessOffersPage"
            exact
            component={BusinessOffersPage}
          />
          <PrivateRoute
            path="/Freelancer"
            exact
            component={FreelanceOffersPage}
          />

          <PrivateRoute
            path="/Messaging/:senderID/:recipientID"
            exact
            component={Messaging}
          />
        </div>
      </AppContext.Provider>
    );
  }
}

export default withRouter(App);
