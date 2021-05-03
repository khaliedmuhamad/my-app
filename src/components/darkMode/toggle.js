import React from 'react'

export const Toggle = () => {
    const body = document.getElementById('body');
const troggle = () => {
    body.className = "dark";
}  
console.log(body.className);
    return (
        <div>
            <button className='btn' onClick={() => troggle}>
                toggle
            </button>
        </div>
    )
}
