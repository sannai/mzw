import { takeEvery, put, call } from 'redux-saga/effects'
import { get } from '../api/get'

//轮播图
function* handleSwipeable(action) {
    yield put({
        type: 'start/swipeable/data'
    })
    const datas = yield call(get, "/v4/api/billboard/home", { 
        __t: action.data.t
    })
    if(datas.msg === 'ok') {
    yield put({ 
        type: 'fulfil/swipeable/data',
        payload:datas.data.billboards
    })
    }else {
    yield put({ 
        type: 'err/swipeable/data',
        payload:'失败'
    })
    }
}

//热映电影列表
function* handleFilm(action) {
    yield put({
        type: 'start/film/data'
    })
    const datas = yield call(get, "/v4/api/film/now-playing", { 
        __t: action.data.t,
        page: action.data.page, 
        count: action.data.count
    })
    if(datas.msg === 'ok') {
        yield put({ 
            type: 'fulfil/film/data',
            payload:datas.data.films
        })
    }else {
        yield put({ 
            type: 'err/film/data',
            payload:'失败'
        })
    }
}

//上映电影列表
function* handleShowMovie(action) {
    yield put({
        type: 'start/showmovie/data'
    })
    const datas = yield call(get, "/v4/api/film/coming-soon", { 
        __t: action.data.t,
        page: action.data.page, 
        count: action.data.count
    })
    if(datas.msg === 'ok') {
        yield put({ 
            type: 'fulfil/showmovie/data',
            payload:datas.data.films,
            payloadCurrent:datas.data.page.current,
            payloadTotal:datas.data.page.total,
        })
    }else {
        yield put({ 
            type: 'err/showmovie/data',
            payload:'失败'
        })
    }
}

//电影详情
function* handleMovieDetails(action) {
    yield put({
        type: 'start/moviedetails/data'
    })
    const datas = yield call(get, `/v4/api/film/${action.data.id}`, {
        __t: action.data,
    })
    if(datas.msg === 'ok') {
        yield put({ 
            type: 'fulfil/moviedetails/data',
            payload:datas.data.film
        })
    }else {
        yield put({ 
            type: 'err/moviedetails/data',
            payload:'失败'
        })
    }
}


// 合并监听器
function* index() {
    yield* [
        takeEvery('FILM', handleFilm),
        takeEvery('SWIPEDLE', handleSwipeable),
        takeEvery('SHOWMOVIE', handleShowMovie),
        takeEvery('MOVIEDETAILS', handleMovieDetails),     
        // takeEvery('ADDRESS', handleAddress)     
    ]
  }
export default index