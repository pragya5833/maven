import React,{Component} from 'react';
import WithClass from './hoc/WithClassComponent';
import Aux from './hoc/Aux';
// import Person from './Person';
import Cockpit from './Cockpit';
import classes from './App.module.css';
import Persons from './Persons';
class App extends Component{
    constructor(props){
        super(props);
        console.log("[App.js] App.js constructor");
    }
    state={persons:[{id:"iop",name:"Maximum",age:22},
    {id:"lkj",name:"milini",age:23},
    {id:"mnb",name:"Stephanie",age:24}],status:true,showcockpit:true,changeCounter:0}
    static getDerivedStateFromProps(props,state){
        console.log('[App.js] getDerivedStateFromProps',props);
        return state;
    }
    componentDidMount(){
        console.log('[App.js] componentDidMount');
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('[App.js] shoulcomponentupdate');
        return true;

    }
    componentDidUpdate(){
        console.log('[App.js] component did update');
    }

    changeHandler=(event,ind)=>{
        const person={...this.state.persons[ind]};
        person.name=event.target.value;
        const persons=[...this.state.persons];
        persons[ind]=person;
        this.setState((prevState,props)=>{return({persons:persons,changeCounter:prevState.changeCounter+1})});

    }
    showHandler=()=>{
        const doesShow=!(this.state.status);
        this.setState({status:doesShow});
    }
    deleteHandler=(index)=>{
        const persons=[...this.state.persons];
        persons.splice(index,1);
        this.setState({persons:persons});
    }
render(){
    console.log('[App.js] render');
    let person=null;
    // let btn= "Show Me!";
    if(this.state.status)
    {
        person = (
        <div>
        <Persons persons={this.state.persons}deleted={this.deleteHandler} changed={this.changeHandler} />
        </div>);
    //  btn = "Hide Me!";
    }
    // const assignedClasses=[];
    // if(this.state.persons.length<=2){
    //     assignedClasses.push(classes.red);
    // }
    // if(this.state.persons.length<=1){
    //     assignedClasses.push(classes.bold);
    // }

 return(
        <Aux>
        {/* <h1>Hi i am react</h1>
        <p className={assignedClasses.join(' ')}>This is a real app</p>
        <button onClick={this.showHandler}>{btn}</button> */}
        <button onClick={()=>{this.setState({showcockpit:false})}}>Remove Cockpit</button>
        {this.state.showcockpit ? (<Cockpit persons={this.state.persons} show={this.state.status} showing={this.showHandler}/>):null}
         {person}
    </Aux>);
}
}


export default WithClass(App,classes.app);