// src/reducers/index.js
import { combineReducers } from 'redux';
import companiesReducer from './companies';
import exchangeFilterReducer from './exchangeFilter';
import minimumFilterReducer from './minimumFilter';
import maximumFilterReducer from './maximumFilter';
import nameFilterReducer from './nameFilter';

const reducer = combineReducers({
  companies: companiesReducer,
  exchangeFilter: exchangeFilterReducer,
  minimumFilter: minimumFilterReducer,
  maximumFilter: maximumFilterReducer,
  nameFilter: nameFilterReducer,
});

export default reducer;
