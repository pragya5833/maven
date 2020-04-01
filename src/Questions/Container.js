import React,{Component} from 'react';
import AddQuestion from './AddQuestion';
import ShowQuestion from './ShowQuestion';
class Question extends Component{
    state={Questions:[]};
    addHandler=(ques,opt1,opt2)=>{
        const Questions = [...this.state.Questions];
        Questions.push({Question:ques,options:opt1,opt2,show:false});
        this.setState({Questions:Questions});
    }
    showHandler=(ind)=>{
        const question={...this.state.Questions[ind]};
        question.show=true;
        const Questions=[...this.state.Questions];
        Questions[ind]=question;
        this.setState({ Questions: Questions });
    }
    deleteHandler=(ind)=>{
        const Questions=[...this.state.Questions];
        Questions.splice(ind,1);
        this.setState({Questions:Questions});
    }

    render(){
        let show = <div>{this.state.Questions.map((s,index)=>{
            return(<ShowQuestion name={s.Question} click={()=>this.showHandler(index)}
             showop={s.show} opts={s.options} delete={()=>this.deleteHandler(index)}/>)
        })}</div>

        return(
            <div>
                <AddQuestion click={this.addHandler}/>
                {show}
            </div>
        );
    }
}
export default Question;
