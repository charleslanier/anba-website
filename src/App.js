import React from 'react';
import './css/App.css';
import './css/fonts.css';
import Nav from './components/Nav.js';
import Shelf from './components/Shelf.js';
import Sidebar from './components/Sidebar.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		let lastScroll = window.scrollY;
		window.onscroll = function(e) {
			if (lastScroll < 164 && window.scrollY >= 164) {
				document.body.getElementsByClassName('Sidebar')[0].style = 'position: fixed; top: 20px'
			} else if (lastScroll < 164 && window.scrollY < 164) {
				document.body.getElementsByClassName('Sidebar')[0].style = ''
			}
			lastScroll = window.scrollY;
		}
	}

	render() {
		return (
			<div className="App">
				<Nav/>
				<Sidebar/>
				<Shelf/>
			</div>
		);
	}
}

export default App;
