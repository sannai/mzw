import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action'
// import {getDatail} from '../../api/'
import Loading from '../../components/Loading/Loading'
import styles from './Details.css';
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory({
    forceRefresh: true
})
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Navigation: false
        }
    }
    
    componentWillMount() {
        let id = this.props.match.params.id
        let data = {
            id,
            t: 1508226688527
        }
        //电影详情信息
        this.props.movieDetails(data)

        // getDatail(id).then(res => {
        //     this.setState({
        //         detail: res.data.film
        //     })
        // }).catch(err => {
        //     console.log(err)
        // })
    }
    
    //打开导航弹出
    handleNavigation(item) {
        this.setState({
            Navigation: !this.state.Navigation
        }) 
        if(item === '首页') {
            history.push(`/`)
        } else if(item === '影片') {
            history.push(`/now-playing`)
        } else if(item === '我的') {
            history.push(`/login`)
        }else {
            return
        }
    } 


	render() {
		return (
			<div className={styles.Details}>
                {
                    this.props.movieDetailsLoaing
                    ?
                    <div>
                        <Header city={this.props.DetailedAddress} film={this.props.movieDetailsData.name} Navigation={this.state.Navigation} handleNavigation={this.handleNavigation.bind(this)} />
                        <div style={{width: '100%', height: document.documentElement.clientHeight-50}}>
                            <div className={styles.filmImgWrap}>
                                <img src={this.props.movieDetailsData.cover.origin} alt="" style={{width: '100%'}} />
                            </div>
                            <div className={styles.filmIntro}>
                                <div className={styles.filmWord1}>影片介绍</div>
                                <div className={styles.filmWord2}>
                                    <span>导演:&nbsp;</span>
                                    <span>{this.props.movieDetailsData.director}</span>
                                </div>
                                <div className={styles.filmWord2}>
                                    <span>主演:&nbsp;</span>
                                    <span>
                                        {
                                            this.props.movieDetailsData.actors.map((t, i) => t.name+'|')
                                        }
                                    </span>
                                </div>
                                <div className={styles.filmWord2}>
                                    <span>地区语言&nbsp;</span>
                                    <span>{this.props.movieDetailsData.nation}</span>
                                    <span>{this.props.movieDetailsData.language}</span>
                                </div>
                                <div className={styles.filmWord2}>
                                    <span>类型&nbsp;</span>
                                    <span>{this.props.movieDetailsData.category}</span>
                                </div>
                                <div className={styles.filmWord2}>
                                    <span>上映时间&nbsp;</span>
                                    <span>{new Date(this.props.movieDetailsData.premiereAt).toLocaleString()}</span>
                                </div>
                                <div className={styles.filmWord3}>
                                    {this.props.movieDetailsData.synopsis}
                                </div>
                            </div>
                        </div>
                        <Button text={'立即购票'}/>
                    </div>
                    : 
                    <Loading />
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

export default connect(mapStateToProps, mapDispatchToProps)(Details)
