import React from 'react'
import NavBar from '../compoents/Landing/NavBar';
import Home from '../compoents/Landing/Home';
import ListOfClasses from '../compoents/Landing/ListOfClasses';
import About from '../compoents/Landing/About';
import LoginUser from '../compoents/Landing/LoginUser';
import LoginSensei from '../compoents/Landing/LoginSensei';
import ContactUs from '../compoents/Landing/ContactUs';
import RegisterUser from '../compoents/Landing/RegisterUser'
import RegisterSensei from '../compoents/Landing/RegisterSensei'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NotFound from '../compoents/Landing/NotFound';


const IndexLanding = () => {
    return (
        <div className="indexLanding">
            <Router>
                <NavBar></NavBar>
                
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home/about" component={About}></Route>
                <Route exact path="/home/contact" component={ContactUs}></Route>
                <Route exact path="/home/listOfClasses" component={ListOfClasses}></Route>
                <Route exact path="/home/login/user" component={LoginUser}></Route>
                <Route exact path="/home/login/sensei" component={LoginSensei}></Route>
                <Route exact path="/home/login/registerUser" component={RegisterUser}></Route>
                <Route exact path="/home/login/registerSensei" component={RegisterSensei}></Route>
                {/* <Route  path="/*" component={NotFound}></Route> */}
            </Router>
        </div>
    )
}

export default IndexLanding
