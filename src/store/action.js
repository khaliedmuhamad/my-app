import {ADD_TO_FAV , REMOVE_FROM_FAV} from './types';
export const addTofav = (fork) => {
    return {
        type: "ADD_TO_FAV",
        fork,
        num:1
    };
};

export  const removeFromfav = (index) => {
    return {
        type:"REMOVE_FROM_FAV",
        index,
        num:1
    }
}


 
