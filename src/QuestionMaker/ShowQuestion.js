import React,{useState} from 'react';
import  sh from './ShowQuestion.module.css';

const Showquestion=(props)=>{

    const showing=()=>{
        if (props.showoption===true){
            return(
                props.opts.map(s=>{return(<li>{s}</li>)})
                );
        }
    }
    return(<div className={sh.Question}>
        <p onClick={props.click}>{props.quest}</p>
        <p>{showing()}</p>
    </div>);
}
export default Showquestion;