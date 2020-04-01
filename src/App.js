import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddQuestion from './QuestionMaker/AddQuestion';
import Showquestion from './QuestionMaker/ShowQuestion';
class App extends Component {
	state = { questions: [{ question: 'name?', options: ['Pragy', 'Shavi'], showoption: false } ] };
	addHandler = (q, ops) => {
		const Questions = [ ...this.state.questions ];
		Questions.push({ question: q, options: [ ops[0], ops[1] ],showoption:false });
		this.setState({ questions: Questions });
	};
	changeshow=(ind)=>{
		const Questions={...this.state.questions[ind]};
		Questions.showoption=!Questions.showoption;
		const qu=[...this.state.questions];
		qu[ind]=Questions;
		this.setState({questions:qu});
	}
	render() {
		let addques = (
			<div>
				<AddQuestion click={this.addHandler} />

			</div>
		);
		let showques = (
			<div>
				{this.state.questions.map((s,index) => {
					return <Showquestion key={s} quest={s.question} click={()=>this.changeshow(index)} showoption={s.showoption} opts={s.options} />;
				})}
			</div>
		);
		return (
			<div className="App">
				{addques}
				{showques}
			</div>
		);
	}
}

export default App;
