import { combineReducers } from 'redux';

import { initialReducer } from './single-reducer';
import {paginationReducer } from './pagination-reducer';

const rootReducer = combineReducers({
    userData: initialReducer,
    paginationData: paginationReducer
});

export default rootReducer;