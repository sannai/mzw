//图片
import React from 'react'
import styles from './TitleList.css'

class TitleList extends React.Component {
    render() {
        return (
            <div className={styles.TitleList} >
                <div style={{width: '200px'}}>{this.props.name}</div>
                <div>{this.props.grade}</div>
            </div>
        );
    }
}

export default TitleList;