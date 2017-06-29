import * as _ from 'lodash';
import axios from 'axios';

export const SET_SELECTED_REPRESENTATIVE = 'SET_SELECTED_REPRESENTATIVE';
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SET_REPRESENTATIVES = 'SET_REPRESENTATIVES';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';

export function getRepresentatives(type, state) {
    return (dispatch) => {
        dispatch(startLoading());
        dispatch(setSelectedRepresentative({}));
        axios.get(`${type}/${state}`)
            .then((response) => {
                dispatch(setRepresentatives(_.get(response, 'data.results', [])));
                dispatch(setSearchBy(type));
                dispatch(endLoading());
            })
            .catch((error) => {
                console.error(`Error loading representatives from ${type}/${state} endpoint with status code ${error.response.status}`);
                dispatch(endLoading());
            })
    };
}

export function setRepresentatives(representatives) {
    return {
        type: SET_REPRESENTATIVES,
        representatives
    };
}

export function setSelectedRepresentative(representative) {
    return {
        type: SET_SELECTED_REPRESENTATIVE,
        representative
    };
}

export function setSearchBy(searchBy) {
    return {
        type: SET_SEARCH_BY,
        searchBy: _.capitalize(searchBy)
    };
}

export function endLoading() {
    return {
        type: END_LOADING
    };
}

export function startLoading() {
    return {
        type: START_LOADING
    };
}