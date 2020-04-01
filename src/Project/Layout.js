import React from 'react';
const layout=(props)=>{
    return(<div>
        <div>Toolbar,sidebar,backdrop</div>
        <div>{props.children}</div>
    </div>);
}
export default layout;