import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import { connect } from 'react-redux';

 const FavIcon = () => {
     const num = useSelector(state => state.count);
    return (
        <div>
            
 <Link to='/Fav'>
 <i className={ num === 0 ? 'far fa-heart' : 'fas fa-heart'}>
<span className="badge bg-danger">{num >= 0 ? num : '0'}</span>
</i>
  </Link>
</div>
    )
}


export default (FavIcon);