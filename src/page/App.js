import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action'
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home'
import Header from '../components/Header/Header'
import Details from '../page/Film/Details'
import BMap from 'BMap'
import ScreeningList from '../page/ScreeningList/ScreeningList'
import Login from './Login/Login';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory({
    forceRefresh: true
})
class App extends Component {
	constructor(props) {
        super(props)
        this.state = {
            Navigation: false
        }
	}
	
	componentDidMount() {
		let that = this;
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r) {
			if(this.getStatus() === 0){
				that.props.WarpAndWeft(r.point.lng, r.point.lat)//调用获取经纬度
				that.getAddress(r.point.lng, r.point.lat)//调用获取详细地址接口
			}
			else {
				alert('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true})
	}
	//获取详细地址
	getAddress(lat, lon){
		// 百度api实例  
		var myGeo = new BMap.Geocoder();      
		// 根据坐标得到地址描述    
		myGeo.getLocation(new BMap.Point(lat, lon), (result) => {      
			if (result){     
				this.props.address(result.address)     
			}      
		});
	}
	
	//打开导航弹出
    handleNavigation(item) {
        this.setState({
            Navigation: !this.state.Navigation
        }) 
        if(item === '首页') {
            history.push(`/`)
        }else if(item === '影片') {
            history.push(`/now-playing`)
        }else if(item === '我的') {
            history.push(`/login`)
        }else {
            return
        }
    } 

	render() {
		return (
			<div>
				<Header city={this.props.DetailedAddress} film={'卖座电影'} Navigation={this.state.Navigation} handleNavigation={this.handleNavigation.bind(this)} />                
				{
					this.props.longitude 
					?
					<Switch>
						{/* 定义路由规则 */}
						<Route path='/' exact component={Home} />
						<Route path='/detail/:id' component={Details}/>
						<Route path='/now-playing' component={ScreeningList}/>
						<Route path='/login' component={Login}/>
					</Switch>
					:
					null
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
