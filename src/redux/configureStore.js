import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import {Feedbacks} from './feedbacks';


export const ConfigureStore=()=>
{
    const store=createStore(combineReducers({campsites:Campsites,comments:Comments,partners:Partners,promotions:Promotions,feedbacks:Feedbacks,...createForms({feedbackForm:InitialFeedback})}),applyMiddleware(thunk, logger));
    return store;
}