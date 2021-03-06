import * as actions from './constants';

export const setCurrentWeather = data => {
    return {
        type: actions.SET_CURRENT_WEATHER,
        payload: data
    }
}
export const setCurrentForecast = data => {
    console.log(data);
    return {
        type: actions.SET_CURRENT_FORECAST,
        payload: data
    }
}

export const setCurrentSearchCity = data => {
    return {
        type: actions.CURRENT_SEARCH_CITY,
        payload: data
    }
}
export const setCityLocal = data => {
    return {
        type: actions.DELETE_CITY,
        payload: data
    }
}
export const setIsToAddFavourite = data => {
    return {
        type: actions.IS_TO_ADD_FAVOURITE,
        payload: data
    }
}
export const setKeySearch = data => {
    return {
        type: actions.SET_KEY_SEARCH,
        payload: data
    }

}
