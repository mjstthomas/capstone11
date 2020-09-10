import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './Routes/LandingPage';
import SignUp from './Routes/signup';
import Login from './Routes/login';
import './App.css';

class App extends React.Component {

  render(){
    const context = {}
  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <Route path='/' exact component={LandingPage} />
        <Route path='/SignUp' exact component={SignUp} />
        <Route path='/Login' exact component={Login} />
      </div>
    </AppContext.Provider>
  )};
}

export default App;
