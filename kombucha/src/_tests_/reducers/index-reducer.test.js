import rootReducer from '../../components/reducers/index';

import formVisibleReducer from '../../components/reducers/form-visible-reducer';
import kombunchaListReducer from '../../components/reducers/kombuncha-list-reducer';
import Kombuncha from '../../components/Kombuncha';



describe("rootReducer", () => {
    //Test one
    let action;
    test('Should return default state if no action type is reconginzed', () => {
        expect(kombunchaListReducer({}, { type: null })).toEqual({})
    })



    //Test two
    test('Should successfully add new ticket data to masterTicketList', () => {
        
        action = {
            type: 'ADD_KOMBUNCHA',
            brand: "coke",
            price: "5",
            flavor: "cherry",
            stock: 1,
        }
        expect(kombunchaListReducer({}, action)).toEqual({ [0]: {brand: "coke",price: "5",flavor: "cherry",stock: "1", }})
    })


});