import * as c from './../actions/actionTypes';

const kombunchaList={}

export default(state = kombunchaList, action) => {

    const {brand,price,flavor,stock,id} = action;
    switch(action.type){
        case c.ADD_KOMBUNCHA:
            return Object.assign({}, state,{
                [id]:{
                    brand:brand,
                    price:price,
                    flavor:flavor,
                    stock:stock,
                    id:id
                }
            })
            default:
        return state;
    }
    
}