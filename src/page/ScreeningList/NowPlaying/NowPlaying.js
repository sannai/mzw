//404
import React from 'react'
import styles from './NowPlaying.css'
import ImgList from '../ImgList/ImgList'
import TitleList from '../TitleList/TitleList'
import ContentList from '../ContentList/ContentList'
import InformationList from '../InformationList/InformationList'
class NowPlaying extends React.Component {
    render() {
        return (
            <div className={styles.NowPlaying}>
                {
                    
                    <ul className={styles.listUnstyled} >
                        {
                            this.props.data&&this.props.data.map((t, i) =>
                            <li key={i} className={styles.reactid} onClick={() => this.props.handleDetails(t.id)}>
                                <div className={styles.imgList}>
                                        <ImgList origin={t.cover.origin} />
                                </div>
                                <div className={styles.desc}>
                                    <TitleList name={t.name} grade={t.grade} />
                                    <ContentList intro={t.intro} />
                                    <InformationList scheduleCount={t.scheduleCount || (new Date(t.premiereAt).getMonth()+1)+'月'+(new Date(t.premiereAt).getDate()+'日')} watchCount={t.watchCount} time={t.scheduleCount ? '家影院上映' : '上映'} num={t.watchCount ? '购票' : t.premiereAt} />
                                </div>
                            </li>) 
                        }
                    </ul>
                }
            </div>
        );
    }
}

export default NowPlaying;