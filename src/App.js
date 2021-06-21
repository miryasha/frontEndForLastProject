import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import IndexLanding from './compoents/IndexLanding';
import IndexDashBoard from './compoents/IndexDashBoard';







function App() {
  // const isAuthenticated = false;

  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    
      <Route path='/home/*' component={IndexLanding} />
      <Route exact path='/userdash/*' component={IndexDashBoard} />
      
           
           {/* <Route exact path='/profile' render={()=>{
            return isAuthenticated ? <ProfilePage /> : <Redirect  to='/'/>;
           }} /> */}
     
      </Switch>
   </BrowserRouter> 
    </div>
  );
}

export default App;
