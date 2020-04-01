import React ,{Component} from 'react';
import Aux from './hoc/Aux';
import WithClass from './hoc/WithClassComponent';
import obj from './Person.module.css';
class Person extends Component{

    render(){
        console.log('[Person.js] renderring');
        return (<Aux>
            <p onClick={this.props.delete}>I am{this.props.name} and {this.props.age}years ols</p>
            <input type="text" value={this.props.name} onChange={this.props.change} />
            <p>{this.props.children}</p>
        </Aux>);
    }

}
export default WithClass(Person, obj.person);