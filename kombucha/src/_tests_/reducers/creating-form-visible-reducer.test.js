import creatingFormVisibleReducer from "../../components/reducers/form-visible-reducer";
import * as c from "../../components/actions/actionTypes";



describe("creatingFormVisibleReducer", () => {
    test("returns default state if action type is null", () => {
      expect(creatingFormVisibleReducer(false, { type: null })).toEqual(false);
    });

    test('toggles create form state between false and true', () => {
        expect(creatingFormVisibleReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
      });
  
    
  });