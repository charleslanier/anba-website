import React from 'react';
import Logo from '../assets/logo.svg';
import Cart from '../assets/cart.svg';
import User from '../assets/user.svg';
import Like from '../assets/like.svg';
import './Nav.css';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="Nav" >
				<img className="Logo" src={Logo} />
				<div className="MenuBox" >
					<div className="Menu MenuText" >
						<div>
							<h4>SHOP</h4>
						</div>
						<div>
							<h4 className="Selected" >CAPSULE</h4>
						</div>
						<div>
							<h4>THE BRAND</h4>
						</div>
						<div>
							<h4>LOOKBOOK</h4>
						</div>
					</div>
					<div className="Menu MenuIcon" >
						<div>
							<img className="MediumIcon" src={User} ></img>
						</div>
						<div>
							<img className="MediumIcon" src={Cart} ></img>
						</div>
						<div>
							<img className="MediumIcon" src={Like} ></img>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
