import React from 'react';
// import { Link } from 'react-router-dom';
export default class Alert extends React.Component{
	constructor(props) {
		super(props);
	}
	handleClose(){
		this.props.handleTasks && this.props.handleTasks();
	}
	render(){
		return (
			<div className="alert">
				<p>成功</p>
				<a href="javascript:;" onClick={this.handleClose.bind(this)}>好的</a>
			</div>
		);
	}
}

