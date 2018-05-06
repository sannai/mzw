//列表
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action'
import styles from './ScreeningList.css'
import NowPlaying from './NowPlaying/NowPlaying'
import Loading from '../../components/Loading/Loading'
import LoadMore from '../../components/LoadMore/LoadMore'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory({
    forceRefresh: true
})
class ScreeningList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            switch: 1
        }
        this.loadMoreData = this.loadMoreData.bind(this)
    }
    componentDidMount() {
        const loadMoreFn = this.loadMoreData
        const wrapper = this.refs.wrapper;
        let timeoutId;
        
        if(this.state.switch === 1) {
            this.loadMoreData()
            //加载更多回调函数
            function callback() {
                const top = wrapper.getBoundingClientRect().top
                const windowHeight = window.screen.height;
                if (top && top < windowHeight) {
                    // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了             
                    loadMoreFn()
                }
            }

            //滚动加载更多
            window.addEventListener('scroll', function() {
                if(this.state.switch === 1) {
                    clearTimeout(timeoutId)
                    timeoutId = setTimeout(callback, 50)
                    if (this.props.filmLoaing || this.state.page > 4) {
                        return 
                    }            
                    if (timeoutId) {
                        clearTimeout(timeoutId)
                    }
                }else {
                    return
                }
            }.bind(this), false)
        }else {
            return
        }
    }

    loadMoreData() {
        this.setState({
            page: this.state.page + 1
        }, () => {
            let data = {
                page: this.state.page,
                count: 5
            }
            this.props.film(data)//上映列表
        });
    }

    //电影详情
    handleDetails(id) {
        history.push(`/detail/${id}`)
    }

    handleSwitch(item) {
        if(item === '正在热映') {
            this.setState({
                switch: 1
            })
            let data = {
                page: this.state.page,
                count: 7
            }
            this.props.film(data)//上映列表
        }else if(item === '即将上映') {
            this.setState({
                switch: 2
            })
            let data = {
                t: 1508226688527,
                page: this.state.page,
                count: 7
            }
            this.props.showMovie(data)//即将列表
        }else {
            return
        }
    }

    render() {
        return (
            <div className={styles.ScreeningList} style={{minHeight: document.documentElement.clientHeight-50}}>
                <div className={styles.listNav}>
                    <div className={this.state.switch === 1 ? styles.nowPlaying : styles.comingSoon} onClick={() => this.handleSwitch('正在热映')}>
                        正在热映
                    </div>
                    <div className={this.state.switch === 2 ? styles.nowPlaying : styles.comingSoon} onClick={() => this.handleSwitch('即将上映')}>
                        即将上映
                    </div>
                </div>
                <div>
                    {
                        this.state.switch === 1 
                        ?
                        <NowPlaying data={this.props.filmData} dataLoaing={this.props.filmLoaing} handleDetails={this.handleDetails.bind(this)} />
                        :
                        <NowPlaying data={this.props.showMovieData} dataLoaing={this.props.showMovieLoaing} handleDetails={this.handleDetails.bind(this)} />
                    }
                    <div className={styles.loadMore} ref="wrapper">
                        {
                            !this.props.filmLoaing 
                            ? 
                            <Loading /> 
                            : 
                            <LoadMore loadMoreData={this.loadMoreData} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreeningList)