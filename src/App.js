import React from 'react';
import { Route } from 'react-router-dom';
// import LandingPage from './Routes/LandingPage';
// import SignUp from './Routes/signup';
import Login from './Routes/login';
// import BizDash from './Routes/Business/BizDash';
// import Search from './Routes/Business/Search';
// import Results from './Routes/Business/Results';
// import FLProfile from './Routes/Business/FLProfile';
// import MakeOffer from './Routes/Business/MakeOffer';
// import BizOffersDash from './Routes/Business/BizOffersDash';
// import FreelanceDash from './Routes/Freelance/FreelanceDash';
// import OffersPage from './Routes/Freelance/OffersPage';
// import Offer from './Routes/Freelance/Offer';
import AppContext from './AppContext';
import './App.css';

class App extends React.Component {
  state = {};
  render(props){
    let context = {};
  return (
    <AppContext.Provider value={context}>
      <div className="App">
        {/* {<Route path='/' exact component={LandingPage} />
        <Route path='/SignUp' exact component={SignUp} />} */}
        {<Route path='/Login' exact component={Login} />}
        {/* {<Route path='/Business' exact component={BizDash} />
        <Route path='/Business/Search' exact component={Search} />
        <Route path='/Business/Results' exact component={Results} />
        <Route path='/Business/Results/:freelanceID' exact component={FLProfile} />
        <Route path='/Business/Results/:freelanceID/MakeOffer' exact component={MakeOffer} />
        <Route path='/Business/BizOffersDash' exact component={BizOffersDash} />
        <Route path='/Freelancer' exact component={FreelanceDash} />
        <Route path='/Freelancer/OffersPage' exact component={OffersPage} />
        <Route path='/Freelancer/OffersPage/:offerId' exact component={Offer} />} */}
      </div>
    </AppContext.Provider>
    )
  }
}

export default App;
