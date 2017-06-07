import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../../../config';
import '../common/common.css';
import './index.scss';
import 'zepto';
export default class Detail extends React.Component{
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		$.ajax({
			type: 'GET',
			url: Config.api.detail,
			data: { name: 'detail' },
			dataType: 'json',
		  	success: function(data){
		    	console.log(data);
		  	},
			error: function(xhr, type){
				console.log(xhr);
			}
		});
	}
	render(){
		return (
			<div className="detail">
				<div className="detail-header">
					<div className="detail-head">
						
					</div>
					<div className="detail-about">
						<p>主播：怪利器</p>
						<p>来源：喜马拉雅</p>
						<p>已播：6%</p>
						<a href="javascript:;">订阅</a>
						<Link to="/buy">￥90 购买</Link>
					</div>
				</div>
				<ul className="detail-list">
					<li>
						<p>list list</p>
						<span>2.6万</span>
						<span>3:12</span>
						<Link to="/separation">￥90 购买</Link>
					</li>
					<li>
						<p>list list</p>
						<span>2.6万</span>
						<span>3:12</span>
						<Link to="/separation">￥90 购买</Link>
					</li>
					<li>
						<p>list list</p>
						<span>2.6万</span>
						<span>3:12</span>
						<Link to="/separation">￥90 购买</Link>
					</li>
					<li>
						<p>list list</p>
						<span>2.6万</span>
						<span>3:12</span>
						<Link to="/separation">￥90 购买</Link>
					</li>
					<li>
						<p>list list</p>
						<span>2.6万</span>
						<span>3:12</span>
						<Link to="/separation">￥90 购买</Link>
					</li>
					<li>
						<p>list list</p>
						<span>2.6万</span>
						<span>3:12</span>
						<Link to="/separation">￥90 购买</Link>
					</li>
				</ul>
			</div>
		);
	}
}

