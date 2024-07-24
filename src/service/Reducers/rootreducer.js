import ContactsReducer from './Contactsreducer';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
const rootreducer =combineReducers({
    ContactsReducer,
    authReducer
});

export default rootreducer;