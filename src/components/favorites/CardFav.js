import React , {useState }  from "react";
import { removeFromfav } from '../../store/action.js';

import { useDispatch } from "react-redux";
import "./CardFav.css";

export const CardFav = (props) => {

  const dispatch = useDispatch();
  const [index] = useState(props.index)
const [hanelfav,setHaandel] = useState(true);


const name = props.data.full_name;
const avatar = props.data.owner.avatar_url;
const link = props.data.link;
const stars = props.data.stargazers_count;
const history = props.data.created_at;
const [star] = useState(stars)

const colectClick = () => {
  hanelfav ? dispatch(removeFromfav(props.index))  : console.log('no');
  setHaandel(false);
}
  return (
    <div className="card">
      <div className="user-avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="user">
        <div className="user-info">
          <h2 className="user-name">Name:<span> {name}</span></h2>
          <h5 className="user-modified">Modified:<span>{history}</span> </h5>
        </div>

        <div className="user-properties">
          <div className="stars item">
          <i class={ 
            star === 0 ? "far fa-star"
            : "fas fa-star"
            }></i> {stars}</div>
          <div className="gitHub item">
            <a href={link} target='_blank' rel='noreferrer' >
            <i class="fab fa-github "></i>   
            </a>
          </div>
          <div className="favourate item" onClick={() => colectClick()}>
            <i className={'fas fa-heart'}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

