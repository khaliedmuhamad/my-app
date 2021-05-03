import React  from 'react';
import './Forks.css';
import {Group1 } from '../pagination/group1.js';

import { Search } from '../Search/Search';

export const Forks = () => { 
    return (
        <div className='pagination'>
            <div className='container'>
              <Search />         
              </div>
              <Group1 />
              </div>    
    )
}
