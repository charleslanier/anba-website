import React from 'react';
import './Category.css';

class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="Category" >
				<div className="CategoryIcon" >
					<img src={this.props.image} />
				</div>
				<div className="CategoryName" >
					<p className={this.props.selected ? "Selected" : ""} >{this.props.name}</p>
				</div>
			</div>
		);
	}
}

export default Category;
