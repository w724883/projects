import React from 'react';
// import { Link } from 'react-router-dom';
export default class Prompt extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="prompt">
				<p>确定要取消吗</p>
				<a href="javascript:;">取消授权</a>
				<a href="javascript:;">取消</a>
			</div>
		);
	}
}

