import React from 'react';
// import { Link } from 'react-router-dom';
export default class Layer extends React.Component{
	constructor(props) {
		super(props);
		// this.handleTasks = [];
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			show:true
		}
	}
	handleClose(){
		this.setState({
			show:false
		});
	}
	componentWillMount() {
		this.props.handleTasks(this.handleClose);
	}
	render(){
		// React.Children.map(this.props.children, function(children){
		// 	console.log(children)
		// })
		// this.props.children.props.handleTasks = this.handleTasks;
		return this.state.show ? (
			<div className="layer">
				<div className="layer-bg" onClick={this.handleClose}></div>
				{this.props.children}
			</div>
		) : null;
	}
}

