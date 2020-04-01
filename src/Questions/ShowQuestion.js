import React from 'react';
const ShowQuestion=(props)=>{

    const showing=()=>{
        if(props.showop==true){
            return(
                props.opts.map(p=>{return(<li>{p}</li>)})
                );
        }
    }

    return(<div>
        <p onClick={props.click}>Question:{props.name}</p>
        <p>{showing()}</p>
        <button onClick={props.delete}>Remove Question</button>
    </div>);
}
export default ShowQuestion;