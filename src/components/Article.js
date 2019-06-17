import React from 'react';
import './Article.css';

class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="Article" >
				<img alt="t-shirt" src={this.props.image} />
				<p className="ArticleName" >T-SHIRT</p>
				<p className="ArticlePrice" >65€</p>
			</div>
		);
	}
}

export default Article;
