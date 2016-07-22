export default (state = null, action) => {
    if(action.error) return state;
    
    switch(action.type) {
        case 'SELECT_PRODUCT':
            return { ...action.payload };
        case 'COMPLETE_CHECKOUT':
            return null;
        default: 
            return state;
    }
}