import * as _ from 'lodash';

import {
    SET_SELECTED_REPRESENTATIVE,
    START_LOADING,
    END_LOADING,
    SET_REPRESENTATIVES,
    SET_SEARCH_BY
} from './mainActions';

let mainInitialState = {
    selectedRepresentative: {},
    representatives: [],
    searchBy: '',
    loading: false
};

export const mainReducer = (state = mainInitialState, action) => {
    switch (action.type) {
        case SET_SELECTED_REPRESENTATIVE:
            return Object.assign({}, state, {
                selectedRepresentative: _.get(action, 'representative', {})
            });
        case SET_SEARCH_BY:
            return Object.assign({}, state, {
                searchBy: _.get(action, 'searchBy', '')
            });
        case SET_REPRESENTATIVES:
            return Object.assign({}, state, {
                representatives: _.get(action, 'representatives', [])
            });
        case END_LOADING:
            return Object.assign({}, state, {
                loading: false
            });
        case START_LOADING:
            return Object.assign({}, state, {
                loading: true
            });
        default: return state;
    }
};