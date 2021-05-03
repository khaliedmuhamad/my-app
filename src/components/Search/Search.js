import React , {useState , useEffect} from 'react';
import {Card} from '../card/card.js';
import { Group1 } from '../pagination/group1.js';


import './Search.css';
export const Search = () => {

    const [num, setNum] = useState(1)
    const [query, setQuery] = useState('');
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState(true);
    const [errMessage, setErrMessage] = useState('Example:" firebase/firebase-tools "');
    const [data,setData] = useState({});

    let [location,SetLocation] = useState('');
   
   
    const search = async e => {
        if(e.key === 'Enter'){
            await fetch(`https://api.github.com/repos/${query}`)
            .then((res) =>
               { if (res.ok) return res.json();
                throw new Error('something went wrong while requesting posts');}
                 )
            .then(result => {  
                setData(result);
                    setLoad(true);
                } 
            ).catch(e => {
                setErr(false)
                setErrMessage(`Sorry I canot not find now`)}
                );
    }

    }
  const searching = async() => {

    await fetch(`https://api.github.com/repos/${query}`)
    .then((res) =>
       { if (res.ok) return res.json();
        throw new Error('something went wrong while requesting posts');}
         )
    .then(result => {  
        setData(result);
            setLoad(true);
        } 
    ).catch(e => {
        setErr(false)
        setErrMessage('Sorry I canot not find now')}
        );
    }
     
    return (
        <div>
            <div className='search'>
            <input
              type='text'
              placeholder='ownerName/repoName'
              className='search-bar'
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
            <span className='search-icon' onClick={searching}><i class="fas fa-search"></i></span>
            </div>
            <div className="search-result">
                
            {(load) ?
            <Card  data={data} />
            : <div className='err'>
                            <i className="fas fa-exclamation-triangle danger" style={
                                !load ? {"color":"#3a6351"} : {"color":"#ce1212"}
                            }> </i> {" "}
                            <h4 className='mess' style={
                                !load ? {"color":"#3a6351"}  : {"color":"#ce1212 !important"}
                            }>{errMessage}</h4>
                 </div>
            }
            {
             (load ) ?
             <Group1  apiLink={data.url} num={num} />
            :   'lol'}
            {
            }
            </div>
            <h1>{num}</h1>
            <button className="btn btn-link"onClick={()=>{setNum(() => 
                num <= 1 ? 1 : num-1 )}} >-</button>
            <button className="btn btn-link"onClick={()=>{setNum(1)}} >1</button>
            <button className="btn btn-link"onClick={()=>{setNum(2)}} >2</button>
            <button className="btn btn-link"onClick={()=>{setNum(3)}} >3</button>
            <button className="btn btn-link"onClick={()=>{setNum(4)}} >4</button>
            <button className="btn btn-link"onClick={()=>{setNum(4)}} >5</button>
            <button className="btn btn-link"onClick={()=>{setNum(() => eval(num + 1 ))}} >+</button>
        </div>
    )
}
