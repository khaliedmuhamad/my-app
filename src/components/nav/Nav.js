import React from 'react'
import { BrowserRouter as Router, Route, NavLink ,Switch} from "react-router-dom";
import { Home } from '../home/Home';
import { Forks } from '../Forks/Forks';
import './Nav.css';
import {svg} from '../home/svg.js'
import {Fav} from '../favorites/Fav.js';
import FavIcon from '../favorites/FavIcon';
export const Nav = () => {
    console.log(svg[2].educator)
    return (
         <Router>
        <nav>
            <div className='container'>
                <div className='brand-logo'>
                {svg[2].educator}
                <span className='brand-identify'>Talent DEV</span>
                </div>
           <div className='links'>
          <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
  
         <NavLink  exact activeClassName="active" className="nav-link" to="/forks">Forks</NavLink>

          <NavLink exact activeClassName="active"className="nav-link" to="/favorates">love
          <FavIcon />
          </NavLink>
          
            </div>
              </div>       </nav>     
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/forks" component={Forks} exact />
                <Route path="/favorates" component={Fav} exact />

            </Switch>
        </Router>
       
     
    )
}
