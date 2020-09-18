import rootReducer from '../../components/reducers/index';

import formVisibleReducer from '../../components/reducers/form-visible-reducer';
import kombunchaListReducer from '../../components/reducers/kombuncha-list-reducer';



describe("rootReducer", () => {
    //Test one

    test('Should return default state if no action type is reconginzed', () => {
        expect(kombunchaListReducer({} , {type:null})).toEqual({})
    })

  

    
})