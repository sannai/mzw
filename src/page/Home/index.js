import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action'
import Movie from '../../page/Home/Movie/Movie'
import MovieShow from '../../page/Home/Movie/MovieShow'
import Swipeable from '../../components/Swipeable/Swipeable'
class Home extends Component {
    componentDidMount() {
        let data = {
            t: 1508226688527,
            page: 1,
            count: 3
        }
        this.props.swipedle(1508226688527)//轮播图
        this.props.film(data)//热映列表
        this.props.showMovie(data)//上映列表
	}
	render() {
		return (
			<div>
                <Swipeable data={this.props.swipeableData} dataLoaing={this.props.swipeableLoaing} />                
                <Movie film={this.props.film} movieDetails={this.props.movieDetails} push={this.props.history.push} data={this.props.filmData} dataLoaing={this.props.filmLoaing} />
                <MovieShow data={this.props.showMovieData} dataLoaing={this.props.showMovieLoaing} showMovie={this.props.showMovie}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
