import React from 'react';
const BuildControl=(props)=>{
    return(
        <div>
            <div>{props.label}</div>
            <button onClick={props.adding}>More</button>
            <button onClick={props.removing} >Less</button>
        </div>
    );
}
export default BuildControl;