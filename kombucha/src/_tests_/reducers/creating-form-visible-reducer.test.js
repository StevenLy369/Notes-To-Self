import creatingFormVisibleReducer from "../../components/reducers/form-visible-reducer";



describe("creatingFormVisibleReducer", () => {
    test("returns default state if action type is null", () => {
      expect(creatingFormVisibleReducer(false, { type: null })).toEqual(false);
    });
  
    
  });