import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Loading from '../../../components/Loading/Loading'
import styles from './Movie.css';
import LoadMore from '../../../components/LoadMore/LoadMore'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory({
    forceRefresh: true
})
class MovieShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
        this.loadMoreData = this.loadMoreData.bind(this)
    }

    componentDidMount() {
        const loadMoreFn = this.loadMoreData
        const wrapper = this.refs.wrapper;
        let timeoutId;
        
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
            clearTimeout(timeoutId)
            timeoutId = setTimeout(callback, 50)
            if (this.props.dataLoaing) {
                return 
            }            
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }.bind(this), false)
    }

    //电影详情
    handleDetails(id) {
        history.push(`/detail/${id}`)
    }

    //加载更多
    loadMoreData() {
        this.setState({
            page: this.state.page + 1
        }, () => {
            let data = {
                t: 1508226688527,
                page: this.state.page,
                count: 3
            }
            this.props.showMovie(data)//上映列表
        });
    }

	render() {
		return (
			<div className={styles.Movie} style={{minHeight: '100px'}}>
                <ul className={styles.unstyled}>
                    {
                        this.props.data.map((t, i) => 
                            <li key={i} className={styles.reactid} onClick={() => this.handleDetails(t.id)}>
                                <div className={styles.item}>
                                    <div className={styles.itemImg}>
                                        <LazyLoad height={200}>
                                            <img src={t.cover.origin} alt={t.intro} />
                                        </LazyLoad>
                                    </div>
                                    <div className={styles.desc}>
                                        <div className={styles.left}>
                                            <div className={styles.name}>{t.name}</div>
                                        </div>
                                        <div className={styles.right} style={{paddingtop: '5px'}}>
                                            <span className={styles.score}>{t.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                    }
                </ul>
                <div className={styles.loadMore} ref="wrapper">
                    {
                        !this.props.dataLoaing 
                        ? 
                        <Loading /> 
                        : 
                        <LoadMore loadMoreData={this.loadMoreData} />
                    }
                </div>
			</div>
		);
	}
}

export default MovieShow
