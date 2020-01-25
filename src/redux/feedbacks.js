import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = {isLoading: true,errMess: null,feedbacks: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACKS:
            return {...state, isLoading: false, errMess: null, feedbacks: action.payload};

        case ActionTypes.FEEDBACKS_LOADING:
            return {...state, isLoading: true, errMess: null, feedbacks: []}

        case ActionTypes.FEEDBACKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
          return state;
      }
};