//404
import React from 'react'
import styles from './ContentList.css'

class ContentList extends React.Component {
    render() {
        return (
            <div className={styles.ContentList}>
                {this.props.intro}
            </div>
        );
    }
}

export default ContentList;