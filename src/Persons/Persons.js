import React,{Component} from 'react';
import Person from './Person';
class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getderivedstatefromprops');
    //     return state;
    // }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.persons!==this.props.persons){
            console.log('[Persons.js] shouldComponentUpdate');
            return true;
        }
        else{
            return false;
        }
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getsnapshotbeforeupdate');
        return {message:'snapshot'};
    }
    componentDidUpdate(){
        console.log('[Person.js] componentDidupdate');
    }
    componentWillUnmount(){
        console.log('[Person.js] componentwillunmount');
    }
    render() {
        console.log('[Persons.js] renderring');
        return (
            this.props.persons.map((p, index) => { return (<Person name={p.name} age={p.age} key={p.id} delete={() => { this.props.deleted(index) }} change={(event) => this.props.changed(event, index)} />) })
        );
}



}

export default Persons;







