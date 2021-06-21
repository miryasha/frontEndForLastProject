import React from 'react'
import UserNavBar from './UserDashBoard/UserNavBar';
//import UserCalendar from './UserDashBoard/UserCalendar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const IndexDashBoard = () => {
    return (
        <div className="IndexDashBoard">
           <Router>

             <UserNavBar></UserNavBar>
             {/* <UserCalendar></UserCalendar> */}
            {/* <Route exact path="/" component={UserDashLanding}></Route> */}

           </Router>
        </div>
    )
}

export default IndexDashBoard
