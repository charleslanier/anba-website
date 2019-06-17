import React from 'react';
import Article from './Article.js'
import Tshirt1 from '../assets/tshirt-1.jpg'
import Tshirt2 from '../assets/tshirt-2.jpg'
import Tshirt3 from '../assets/tshirt-3.jpg'
import Tshirt4 from '../assets/tshirt-4.jpg'
import Tshirt5 from '../assets/tshirt-5.jpg'
import './Shelf.css';

class Shelf extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="Shelf" >
				<h3>T-SHIRTS</h3>
				<div className="ShelfContent" >
					<Article image={Tshirt1} />
					<Article image={Tshirt2} />
					<Article image={Tshirt3} />
					<Article image={Tshirt4} />
					<Article image={Tshirt5} />
				</div>
			</div>
		);
	}
}

export default Shelf;
