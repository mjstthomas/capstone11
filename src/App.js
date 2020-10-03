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
      work: [],
      skills: [{ level: "", skill: "" }],
    },
    userProfile: { id: null, profile: null },
    headerToggle: false,
    isNav: false,
    resultArray: [],
    searchArray: [],
    work: [],
    MustHaveSkills: [
      { level: "", skill: "" },
      { level: "", skill: "" },
      { level: "", skill: "" },
    ],
    // NiceToHaveSkills: [{ level: "", skill: "" }],
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
          .then((profile) => {
            const { history } = this.props;
            this.setState({ user: profile });
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
    const niceToHave = this.state.NiceToHaveSkills;
    let allSkills = mustHave;
    if (niceToHave.length > 0 && niceToHave[0].skill !== "") {
      allSkills = mustHave.concat(niceToHave);
    }
    const filteredSkillList = allSkills.filter((item) => item.skill !== skill);
    const newSkills = [...filteredSkillList];
    this.setState({
      MustHaveSkills: newSkills,
      NiceToHaveSkills: [{ level: "", skill: "" }],
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
    console.log(skill);
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
      NiceToHaveSkills: [{ level: "", skill: "" }],
    });
  };

  handleResult = (result) => {
    const searchedSkillsArray = () => {
      const array = [];
      for (let i = 0; i < this.state.MustHaveSkills.length; i++) {
        array.push(this.state.MustHaveSkills[i].skill);
      }
      return array;
    };

    const newArray = searchedSkillsArray();
    const newSearchArray = [...this.state.searchArray];
    const searchResult = newSearchArray.filter((item) =>
      newArray.some((ai) => item.skills.includes(ai))
    );
    this.setState({ resultArray: searchResult });
  };

  // handle featured work
  addWork = (newURL) => {
    const prevState = this.state;
    prevState.user.work.push(newURL);
    this.setState(prevState);
  };

  removeWork = (index) => {
    const prevState = this.state;
    prevState.user.work.splice(index, 1);
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
    console.log(offer);
    console.log(newArray);
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

  addFreelanceWork = () => {
    for (let project of this.state.work) {
      console.log({ project });
      ApiService.postFreelanceWork(this.state.userProfile.id, project);
    }
  };

  render(props) {
    let context = {
      user: this.state.user,
      userProfile: this.state.userProfile,
      work: this.state.work,
      headerToggle: this.state.headerToggle,
      isNav: this.state.isNav,
      AddSkills: this.state.AddSkills,
      MustHaveSkills: this.state.MustHaveSkills,
      NiceToHaveSkills: this.state.NiceToHaveSkills,
      resultArray: this.state.resultArray,
      signInUser: this.signInUser,
      setNewUserProfile: this.setNewUserProfile,
      resetSkills: this.resetSkills,
      removeSkill: this.removeSkill,
      deleteSkill: this.deleteSkill,
      addSkill: this.addSkill,
      addFreelanceSkills: this.addFreelanceSkills,
      addFreelanceWork: this.addFreelanceWork,
      searchSkill: this.searchSkill,
      setSkill: this.setSkill,
      setLevel: this.setLevel,
      searchLevel: this.searchLevel,
      addWork: this.addWork,
      removeWork: this.removeWork,
      setHeaderToggle: this.setHeaderToggle,
      setNav: this.setNav,
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
