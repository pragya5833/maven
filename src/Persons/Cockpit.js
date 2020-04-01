import React ,{useEffect} from 'react';
import classes from './Cockpit.module.css';
const Cockpit=(props)=>{
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        const timer=setTimeout(()=>{alert('savedd data to cloud');},1000);
        return()=>{
            clearTimeout(timer);
            console.log('[cockpit] cleanupin useEffect')
        }
    },[]);

    useEffect(()=>{console.log('[cockpit.js] 2nd useeffect');
                    return()=>{
                        console.log('[cockpit.js] cleanup in 2nd useeffect');
                    }});

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    let btn="Show Me";
    if(props.show){
        btn="Hide Me";
    }

    return(<div>
        <h1>Hi i am react</h1>
        <p className={assignedClasses.join(' ')}>This is a real app</p>
        <button onClick={props.showing}>{btn}</button>
    </div>);
}
export default Cockpit;