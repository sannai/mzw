//404
import React from 'react'
import styles from './InformationList.css'

class InformationList extends React.Component {
    render() {
        return (
            <div className={styles.InformationList}>
                {this.props.intro}
                <div>{this.props.scheduleCount}{this.props.time}</div>
                <div>{this.props.watchCount}{this.props.num}</div>
            </div>
        );
    }
}

export default InformationList;