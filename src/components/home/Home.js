import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import {svg} from './svg.js';

export const Home = () => {
    console.log(svg[0].wave)
    return (
        <div className='home'>
            <div className='wave'>
            {svg[0].wave}
            </div>
            <div className='container'>           
                <div className='left'>
                    <h1 className='home-head'>Hello,we are Talent developers</h1>
                    <p className='home-para'>Discover forks of repos Github</p>
                <Link to='/forks' >    <button className='btn btn-home' >Get Started</button></Link>
                </div>
                <div className='right'>
                    {svg[1].hello}
                </div>
            </div>
        </div>
    )
}
