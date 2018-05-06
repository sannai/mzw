import React from 'react';
import styles from './LoadMore.css'
const LoadMore = (props) => {
    return (
        <div className={styles.button} onClick={() => props.loadMoreData()}>
            加载更多
        </div>
    )
}

export default LoadMore;