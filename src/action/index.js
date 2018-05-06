//经纬度
export const WarpAndWeft = (lng, lat) => {
    return {
        type:'WARPANDWEFT',
        lng, 
        lat
    }
}
//获取地理详细地址
export const address = (data) => {
    return {
        type:'ADDRESS',
        data
    }
}

//轮播图
export const swipedle = (data) => {
    return {
        type:'SWIPEDLE',
        data
    }
}

//热映电影
export const film = (data) => {
    return {
        type:'FILM',
        data
    }
}

//即将上映
export const showMovie = (data) => {
    return {
        type:'SHOWMOVIE',
        data
    }
}

//电影详情
export const movieDetails = (data) => {
    return {
        type:'MOVIEDETAILS',
        data
    }
}
