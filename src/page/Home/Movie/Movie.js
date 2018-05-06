//热映电影列表组件
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import createBrowserHistory from 'history/createBrowserHistory'
import Loading from '../../../components/Loading/Loading'
import styles from './Movie.css';
import LoadMore from '../../../components/LoadMore/LoadMore'
const history = createBrowserHistory({
    forceRefresh: true
})
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
        this.loadMoreData = this.loadMoreData.bind(this)
    }
    //电影详情
    handleDetails(id) {
        history.push(`/detail/${id}`)
    }

    //加载更多
    loadMoreData() {
        //路由传递数据，暂时没有使用数据
        history.push({
            pathname: '/now-playing',
            state: this.props.data,
        })
    }

	render() {
		return (
			<div className={styles.Movie}>
				{
                    this.props.dataLoaing 
                    ? <ul className={styles.unstyled}>
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
                                            {
                                                !this.props.show 
                                                ? 
                                                <div className={styles.count}>
                                                    <span>{t.cinemaCount}家影院上映</span>
                                                    <span>{t.watchCount}人购票</span>                                            
                                                </div>
                                                :
                                                null
                                            }
                                        </div>
                                        <div className={styles.right} style={{paddingtop: !this.props.show==='show' ? '' : '5px'}}>
                                            <span className={styles.score}>{t.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                        }
                        <LoadMore loadMoreData={this.loadMoreData} />
                    </ul> 
                    : 
                    <Loading />
                }            
			</div>
		);
	}
}

export default Movie;
