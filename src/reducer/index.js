import { handleActions } from 'redux-actions'

const index = handleActions({
    'start/film/data'(state, action) {
        return {
            ...state,
            filmLoaing: false
        }
    },
    'fulfil/film/data'(state, action) {
        return {
            ...state,
            filmLoaing: true,
            filmData: state.filmData.concat(action.payload)
        }
    },
    'err/film/data'(state, action) {
        return {
            ...state,
            filmErr: action.payload,
            filmLoaing:true            
        }
    },
    'start/swipeable/data'(state, action) {
        return {
            ...state,
            swipeableLoaing: false
        }
    },
    'fulfil/swipeable/data'(state, action) {
        return {
            ...state,
            swipeableLoaing: true,
            swipeableData: action.payload
        }
    },
    'err/swipeable/data'(state, action) {
        return {
            ...state,
            swipeableErr: action.payload,
            swipeableLoaing:true            
        }
    },
    'start/showmovie/data'(state, action) {
        return {
            ...state,
            showMovieLoaing: false
        }
    },
    'fulfil/showmovie/data'(state, action) {
        return {
            ...state,
            showMovieLoaing: true,
            showMovieData: state.showMovieData.concat(action.payload),
            showMovieCurrent:action.payloadCurrent,
            showMovieTotal:action.payloadTotal,
        }
    },
    'err/showmovie/data'(state, action) {
        return {
            ...state,
            showMovieErr: action.payload,
            showMovieLoaing:true            
        }
    },
    'start/address/data'(state, action) {
        return {
            ...state,
            addressLoaing: false
        }
    },
    'fulfil/address/data'(state, action) {
        console.log(action)
        return {
            ...state,
            addressLoaing: true,
            latitude:action.payloadCurrent,
            longitude:action.payloadTotal,
        }
    },
    'start/moviedetails/data'(state, action) {
        return {
            ...state,
            movieDetailsLoaing: false
        }
    },
    'fulfil/moviedetails/data'(state, action) {
        return {
            ...state,
            movieDetailsData: action.payload,
            movieDetailsLoaing: true,
        }
    },
    'err/moviedetails/data'(state, action) {
        return {
            ...state,
            movieDetailsErr: action.payload,
            movieDetailsLoaing: true            
        }
    },
    //获取地理详细地址
    'WARPANDWEFT': (state, action) => {
        return {
            ...state,
            latitude: action.lat,
            longitude: action.lng
        }
    },
    //获取地理详细地址
    'ADDRESS': (state, action) => {
        return {
            ...state,
            DetailedAddress: action.data
        }
    }
},{
    filmData: [],
    filmLoaing: false,
    filmErr:'',
    swipeableData: [],
    swipeableLoaing: false,
    swipeableErr: '',
    showMovieData: [],
    showMovieLoaing: false,
    showMovieErr: '',
    showMovieCurrent: '',
    showMovieTotal: '',
    latitude: '',
    longitude: '',
    movieDetailsData: [],
    movieDetailsLoaing: false,
    movieDetailsErr: [],
    DetailedAddress: ''
})

export default index