import * as c from './actionTypes';

export const toggleForm = () => ({
	type: c.TOGGLE_FORM
});


export const addKombuncha = (kombuncha) => {
    const {brand,price,flavor,stock,id} = kombuncha;
    return{
        type:c.ADD_KOMBUNCHA,
        brand:brand,
        price:price,
        flavor:flavor,
        stock:stock,
        id:id
    }
}