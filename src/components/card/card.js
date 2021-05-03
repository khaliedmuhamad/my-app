import React , {useState }  from "react";
import { addTofav } from '../../store/action.js';
import {postData} from "../../store/reducers/reducers.js";

import { useDispatch } from "react-redux";
import "./card.css";

export const Card = (props) => {
  const dispatch = useDispatch();
const [forkInfo] = useState(
  {
    full_name:props.data.full_name,
    id:props.data.id,
    owner:{avatar_url:props.data.owner.avatar_url},
    link : props.data.svn_url,
    stargazers_count : props.data.stargazers_count,
    created_at : props.data.created_at,
  }
)
const [hanelfav,setHaandel] = useState(true);

const name = props.data.full_name;
const avatar = props.data.owner.avatar_url;
const link = props.data.svn_url;
const stars = props.data.stargazers_count;
const history = props.data.created_at;
const [star] = useState(stars)



const colectClick = () => {
  hanelfav ? dispatch(addTofav(forkInfo))  : console.log('no') ;
  hanelfav ? postData(name, avatar, link,star,history)  : console.log('no') ;

 
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
            <i class={
              hanelfav ? 'far fa-heart'
              : 'fas fa-heart'
            }></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default (Card);