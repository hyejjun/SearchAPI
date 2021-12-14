import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper';

export interface ListState {
    searchedList: Array<any>;
    likedList: Array<any>;

}

export const initialState: ListState = {
    searchedList: [],
    likedList: [],
};


export const SEARCHED_LIST = "SEARCHED_LIST" as const;
export const LIKED_LIST = "LIKED_LIST" as const;
export const DELETE_LIKED_LIST = "DELETE_LIKED_LIST" as const;



export const searchedList = () => {
    return {
        type: SEARCHED_LIST,
    }
}

export const likeList = (data: Array<Object>) => {
    return {
        type: LIKED_LIST,
        data
    }
}

export const deleteLikeList = (data: Array<Object>) => {
    console.log("여기 === ", data);
    
    return {
        type: DELETE_LIKED_LIST,
        data
    }
}



type ListAction =
    | ReturnType<typeof searchedList>
    | ReturnType<typeof likeList>
    | ReturnType<typeof deleteLikeList>

const reducer = (state: ListState = initialState, action: ListAction) => {
    switch (action.type) {
        case SEARCHED_LIST:
            return {
                ...state,
            }
        case LIKED_LIST:
            return {
                ...state,
                likedList: [...action.data]
            }
        case DELETE_LIKED_LIST:
            console.log("보자 === ",action.data);
            
            return {
                ...state,
                likedList: [...action.data]
            }
        default:
            return state;
    }
}

export default reducer