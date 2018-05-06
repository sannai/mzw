//图片
import React from 'react'
import styles from './ImgList.css'

class ImgList extends React.Component {
    render() {
        return (
            <div className={styles.ImgList}>
                <img style={{width: '60px', height: '82px'}} src={this.props.origin} alt=""/>
            </div>
        );
    }
}

export default ImgList;