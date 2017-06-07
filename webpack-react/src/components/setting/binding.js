import React from 'react';
// import { Link } from 'react-router-dom';
import Layer from '../common/layer';
import Prompt from '../common/prompt';

export default class Account extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="binding">
				<p>声明声明声明声明声明声明声明声明声明声明声明声明声明声明声明声明声明</p>
				<a href="javascript:;">授权</a>
				<Layer>
					<Prompt />
				</Layer>
			</div>
		);
	}
}

