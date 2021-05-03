import React,{useState,useEffect} from 'react';
import { Card } from '../card/card';
import './groups.css';


export const Group1 = (props) => {
console.log(props.num);
    useEffect(() => {
     fetch(`${props.apiLink}/forks?page=${props.num}&per_page=5`)
     .then((res) =>
     { if (res.ok) return res.json();
      throw new Error('something went wrong while requesting posts');}
       )
     .then(data => {
         console.log(data)
         console.log(data[0])
        setData([data]);
        setLoad(true);
     })
        
    }, [props.num])
   
const [data, setData] = useState([]);
const [load, setLoad] = useState(false);


       
    return (
        <div className="group">
    <div className='container'>
    { load ?
    data[0].map((el,n)=>
     <Card  data={el} index={n} />)
      : 'loadind' } 
      </div>
      </div>
   
    )
}
