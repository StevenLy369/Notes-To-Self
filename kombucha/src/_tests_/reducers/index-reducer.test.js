import rootReducer from '../../components/reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../components/reducers/form-visible-reducer';
import kombunchaListReducer from '../../components/reducers/kombuncha-list-reducer';
import * as c from '../../components/actions/actionTypes';

let store = createStore(rootReducer);


describe("rootReducer", () => {
    //Test one
    let action;
    test('Should return default state if no action type is reconginzed', () => {
        expect(kombunchaListReducer({}, { type: null })).toEqual({})
    })



    //Test two
    test('Should successfully add new ticket data to masterKombunchaList', () => {
        
        action = {
            type: c.ADD_KOMBUNCHA,
            brand: "coke",
            price: "5",
            flavor: "cherry",
            stock: "1",
            id:1
        }
        store.dispatch(action);
        expect(store.getState().kombunchaList).toEqual(kombunchaListReducer(undefined,action))
    })


});