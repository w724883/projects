import React from 'react';
import { Link } from 'react-router-dom';
export default class Separation extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			customize:false
		}
	}
	handleSubmit(){

	}
	handleClick(){
		this.setState({
			customize:true
		});
	}
	handleBlur(){
		this.setState({
			customize:false
		});
	}
	render(){
		return (
			<div className="separation">
				<span>从第三季开始购买</span>
				<ul className="separation-list">
					<li>
						<span>本集</span><br/>
						<em>￥0.3</em>
					</li>
					<li>
						<span>本集</span><br/>
						<em>￥0.3</em>
					</li>
					<li>
						<span>本集</span><br/>
						<em>￥0.3</em>
					</li>
					<li>
						<span>本集</span><br/>
						<em>￥0.3</em>
					</li>
					<li>
						<form onSubmit={this.handleSubmit.bind(this)}>
							{
								this.state.customize ? <input type="number" onBlur={this.handleBlur.bind(this)} /> : <span onClick={this.handleClick.bind(this)}>自定义</span>
							}
						</form>
					</li>
				</ul>
				<div className="separation-info">
					<span>温馨提示</span>
					<p>1.因节目性质，购买后无法退款</p>
					<p>2.因节目性质，购买后无法退款</p>
				</div>
				<div className="separation-buy">
					<p>总价：￥12</p>
					<Link to="/buy">购买</Link>
				</div>
			</div>
		);
	}
}

