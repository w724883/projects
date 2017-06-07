import React from 'react';
// import { Link } from 'react-router-dom';
export default class Buy extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="buy">
				<ul className="buy-list">
					<li>
						<label>专辑名称</label>
						<span>国企改革成绩能打几分？</span>
					</li>
					<li>
						<label>购买数量</label>
						<span>全集</span>
					</li>
					<li>
						<label>购买金额</label>
						<span>国企改革成绩能打几分？</span>
					</li>
				</ul>
				<a href="javascript:;">确认支付</a>
			</div>
		);
	}
}

