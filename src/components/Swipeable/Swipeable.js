//轮播图
import React from 'react'
import ReactSwipe from 'react-swipe';
import Loading from '../Loading/Loading'

class Swipeable extends React.Component {
    render() {
        return (
            <div className='Swipeable' style={{minHeight: '220px',marginTop: '50px'}}>
                {
                    this.props.dataLoaing 
                    ? 
                    <ReactSwipe className="carousel" swipeOptions={{continuous: true, auto: 2000}}>
                        {
                            this.props.data.map((t, i) => 
                            <div key={t.id} style={{width:'100%'}}>
                                <img src={t.imageUrl} alt={t.name} style={{width:'100%'}}/>
                            </div>) 
                        }
                    </ReactSwipe>                    
                    : 
                    <Loading />
                }
            </div>
        );
    }
}

export default Swipeable;