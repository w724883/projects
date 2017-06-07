import React from 'react';
import { Link } from 'react-router-dom';
import '../common/common.css';
import './index.scss';
export default class Setting extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="setting">
				<div className="setting-list">
					<a href="javascript:;">订单中心</a>
					<Link to="/account">资源账号</Link>
					<Link to="/help">帮助说明</Link>
				</div>
			</div>
		);
	}
}



