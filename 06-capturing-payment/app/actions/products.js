import axios from 'axios';
import Scriptly from 'scriptly';

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

function createStripeToken(card) {
    return new Promise((res, rej) => {
        Stripe.setPublishableKey('YOUR-STRIPE-KEY');
        Stripe.card.createToken(card, (status, response) => {
                    if(response.error) rej(response.error);
                    else res(response.id);
                });
    });
}

function performCheckout(product, address, token) {
    console.log(`Using token (${token}) to purchase ${product.name} for $${product.price}.`);
    //You would typically post this to your web server at this point! 
}

export function completeCheckout(product, address, payment) {
    const payload = Scriptly.loadJavascript('https://js.stripe.com/v2/')
                            .then(() => (createStripeToken(payment)))
                            .then((token) => (performCheckout(product, address, token)));

    return {
        type: 'COMPLETE_CHECKOUT',
        payload
    }
}
