import React, { Component } from 'react';
import styles from './Navbar.css';


class Navbar extends Component {

  	render() {
		return (
		<nav className={styles.nav} onClick={() => this.props.toggleNav('空')}>
			<div className={styles.navWrapper}>
				<ul>
					<li onClick={() => this.props.toggleNav('首页')}>
						<span>首页</span><i className="iconfont icon-arrow-right"></i>
					</li>
					<li onClick={() => this.props.toggleNav('影片')}>
						<span>影片</span><i className="iconfont icon-arrow-right"></i>
					</li>
					<li><span>影院</span><i className="iconfont icon-arrow-right"></i></li>
					<li><span>商城</span><i className="iconfont icon-arrow-right"></i></li>
					<li onClick={() => this.props.toggleNav('我的')}><span>我的</span><i className="iconfont icon-arrow-right"></i></li>
					<li><span>卖座卡</span><i className="iconfont icon-arrow-right"></i></li>
				</ul>
			</div>
		</nav>
    	);
  	}
}

export default Navbar;
