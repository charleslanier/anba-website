import React from 'react';
import Tshirt from '../assets/tshirt.svg';
import Sweatshirt from '../assets/sweatshirt.svg';
import Sock from '../assets/sock.svg';
import Cap from '../assets/cap.svg';
import Category from './Category.js';
import './Sidebar.css';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="Sidebar" >
				<Category image={Tshirt} name="T-SHIRTS" />
				<Category image={Sweatshirt} name="SWEATS" />
				<Category image={Sock} name="SOCKS" />
				<Category image={Cap} name="CAPS" />
			</div>
		);
	}
}

export default Sidebar;
