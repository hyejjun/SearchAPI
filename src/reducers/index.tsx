import { combineReducers } from 'redux'
import list from './list'
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { ListState } from './list'
import {Reducer} from 'redux'

const persistConfig = {
    key: 'root',
    whitelist: ['list'], // make sure it does not clash with server keys
    storage
};

export interface State {
    list:ListState,
}


const combinedReducers = combineReducers({
   list
})

export const rootReducer:Reducer<State,AnyAction> = (state,action) => {
    let rootReducer = action.type === HYDRATE
    ? {...state,...action.payload}
    : combinedReducers(state,action)
    return rootReducer
}

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>

