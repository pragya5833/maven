import React from 'react';
const AddQuestion=(props)=>{
    const adding=()=>{
        let x = document.getElementById("ques").value;
        let y = document.getElementById('opt1').value;
        let z = document.getElementById('opt2').value;
        props.click(x,[y,z]);
    }
    return(<div>
        <input type="text" id="ques" /><br/>
        <input type="text" id="opt1" /><br/>
        <input type="text" id="opt2" /><br/>
        <button onClick={adding}>Add Question</button>
    </div>);
}
export default AddQuestion;