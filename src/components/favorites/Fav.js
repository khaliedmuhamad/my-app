import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { CardFav } from './CardFav.js';
import fire from '../../fire/config.js';
import {svg} from './empty.js';
import './Fav.css';

export const Fav = () => {

    const forks = useSelector(state => state.forks);   
    return (
        <div className='fav'>       
            {forks.length - 1 === 0 ? 
            <div className='empty'>
                <h2 className='empty-head'>No favourate fork added</h2>
                <div className='empty-svg'> {svg}</div>
            </div> : <div className='container'>
                {forks.map((el,n) => <CardFav data={el} index={n} />)}
            </div> }

           
        </div>
    )
}

  
export default Fav;
