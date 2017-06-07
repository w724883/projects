import React from 'react';
import { Link } from 'react-router-dom';
import Layer from '../common/layer';
import Alert from '../common/alert';
export default class Account extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="account">
				<ul className="account-list">
					<li>
						<div className="account-icon"></div>
						<div className="account-about">
							<p>喜马拉雅FM</p>
							<span>已绑定 账号：123</span>
						</div>
						<Link to="/binding"></Link>
					</li>
				</ul>
				<Layer handleTasks={(tasks) => {this.setState({tasks})}}>
					<Alert handleTasks={this.state ? this.state.tasks : null} />
				</Layer>
			</div>
		);
	}
}

