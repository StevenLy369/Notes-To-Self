import rootReducer from '../../components/reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../components/reducers/form-visible-reducer';

let store = createStore(rootReducer)

describe("rootReducer", () => {
    //Test one

    test('Should return default state if no action type is reconginzed', () => {
        expect(rootReducer({} , {type:null})).toEqual({
            formVisibleOnPage: false,
            masterKombunchaList:[],
            selectedKombuncha: null

        })
    })
})