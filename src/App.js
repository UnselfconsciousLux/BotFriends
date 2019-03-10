import React, {Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
//import {robots} from './robots';
import './App.css';

// STATE - Describes the STATE of the application
// PROPS - are simply things comes out of state

class App extends Component {
//smart components tend to have a class
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots: users})});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value});
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if(this.state.robots.length === 0){
			return <h1>loading...</h1>
		}
		else {
			return(
				<div className='tc'>
					<h1 className = 'f1'>bot friends</h1>
					<Searchbox searchChange = {this.onSearchChange}/>	
					<CardList robots={filteredRobots}/>
				</div>
			);

		}

	}
}

export default App;