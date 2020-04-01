import React from'react';
import sk from './ShowQuestion.module.css';
import { shallowEqual } from '@babel/types';

const Addquestion=(props)=>{
    const adding=()=>{
       let x=document.getElementById("q").value;
        let y = document.getElementById("opt1").value;
       let z= document.getElementById("opt2").value;
        props.click(x,[y,z]);
    }


    return(<div className={sk.Question}>
        <input type="text" className={sk.input} id="q"/><br/>
        <input type="text" className={sk.input} id="opt1"/><br/>
        <input type="text" className={sk.input} id="opt2"/><br/>
        <button onClick={adding} className={sk.button}>Add Question</button>
    </div>);
}
export default Addquestion;