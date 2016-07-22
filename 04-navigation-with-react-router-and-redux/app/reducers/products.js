export default (state = [], action) => {
    if(action.error) return state;
    
    switch(action.type) {
        case 'GET_PRODUCTS':
            return action.payload.data;
        default: 
            return state;
    }
}