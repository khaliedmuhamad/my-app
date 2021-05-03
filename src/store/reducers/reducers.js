import fire from "../../fire/config.js";
/* post data to fireBase */
export function postData(name, avatar, link,star,history) {
    fire.database().ref('users/'+name).set({
        full_name:name,
        owner:{avatar_url : avatar},
        svn_url : link,
        stargazers_count : star,
        created_at : history,      
    });
  }

/* read and initailize data from  fireBase */
function getFav(){
    const dbRef = fire.database().ref();
dbRef.child("users").get().then((snapshot) => {
  if (snapshot.exists()) {
      let val = snapshot.val()
   
  
     console.log(val)
     return val;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}
console.log(getFav())    
 
        
        
     
        /*
        fire.database().ref('users').on('value', (snapshot) => {
        const vals = snapshot.val();
        let data = [];
        for(let key in vals){
            data.push({
                ...vals[key]
            });}
        */
const initial = {
    count:0,
    forks:[
       
    ]
}
    
export default  function reducers(state = initial,action) {
    switch(action.type){
        case "ADD_TO_FAV" :
            return {            
                count : state.count + action.num,
                forks:[...state.forks,
                action.fork
                ]
                }                                 
         case "REMOVE_FROM_FAV" :{      
            let item_index  = action.index;
            let new_state = [...state.forks];
            new_state.splice(item_index,1)
  
            return { 
                forks:[...new_state],
                count : state.count - action.num,
                }                                   
             
            }              
        default:{
             return state;   
            }       
    }  
}

