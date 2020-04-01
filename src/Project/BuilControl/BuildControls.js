import React from 'react';
import BuildControl from './BuildControl';


const BuildControls=(props)=>{
    const controls=[{label:'salad',type:'salad'},{label:'bacon',type:'bacon'},{label:'cheese',type:'cheese'}];
let show=controls.map(ctrl=>{return <BuildControl label={ctrl.label} adding={()=>props.added(ctrl.type)} removing={()=>props.removed(ctrl.type)} />});
    return(<div>
        <p>Price:{props.price}</p>
    {show}
    <button disabled={props.disabled}>Order Now</button>
    </div>);
}
export default BuildControls;