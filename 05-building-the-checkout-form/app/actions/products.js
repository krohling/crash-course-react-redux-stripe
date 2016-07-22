import axios from 'axios';

export function getProducts() {
    const payload = axios.get('products.json');

    return {
        type: 'GET_PRODUCTS',
        payload
    }
}

export function selectProduct(product) {
    return {
        type: 'SELECT_PRODUCT',
        payload: product
    }
}