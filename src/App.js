import React from "react";
import { Route, withRouter } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import SignUp from "./Routes/signup";
import Login from "./Routes/login";
import FLDetailForm from "./Routes/Freelance/FLProfileDetsForm/FLDetsForm";
import BizDetailForm from "./Routes/Business/BizProfileDetsForm/BizDetsForm";
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
  };

  //Sign in / Sign Up functions

  signInUser = (user) => {
    const signedUser = {
      nickname: user.nickname,
      password: user.password,
    };
    AuthApiService.postLogin(signedUser)
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        this.setState({ userProfile: { id: res.id, profile: res.profile } });
        ApiService.importUser(res.id)
          .then((res) => res.json())
          .then((res) => {
            if (res.error) {
              return this.setState({ error: res.error });
            }
            const { history } = this.props;
            this.setState({ user: res });
            if (this.state.userProfile.profile === true) {
              history.push("/Freelancer");
            }
            if (this.state.userProfile.profile === false) {
              history.push("/Business");
            }
          });
      })
      .catch((e) => {
        setTimeout(() => {
          this.setState((PrevState) => {
            return { ...PrevState, error: "" };
          });
        }, 10000);
        return this.setState((PrevState) => {
          return { ...PrevState, error: e.message };
        });
      });
  };

  setNewUserProfile = (profile) => {
    const prevState = this.state;
    prevState.userProfile = profile;
    this.setState(prevState);
  };

  //Skill Search Functions

  deleteSkill = (skill) => {
    const mustHave = this.state.MustHaveSkills;
    const filteredSkillList = mustHave.filter((item) => item.skill !== skill);
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
    prevState.resultArray.push(...result);
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

  render(props) {
    let context = {
      user: this.state.user,
      userProfile: this.state.userProfile,
      headerToggle: this.state.headerToggle,
      isNav: this.state.isNav,
      AddSkills: this.state.AddSkills,
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
          {this.state.error && <p className="error">{this.state.error}</p>}
          <Route path="/" exact component={LandingPage} />
          <PublicRoute path="/SignUp" exact component={SignUp} />
          <PublicRoute path="/Login" exact component={Login} />
          <PrivateRoute
            path="/SignUp/FLDetails"
            exact
            component={FLDetailForm}
          />
          <PrivateRoute path="/SignUp/BizDetails" component={BizDetailForm} />
          <PrivateRoute path="/Business" exact component={BizDash} />
          <PrivateRoute path="/Business/Search" component={Search} />
          <PrivateRoute
            path="/Business/Profile/:businessID"
            component={BizProfile}
          />
          <PrivateRoute
            path="/Freelancer/Profile/:freelanceID"
            component={FLProfile}
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
