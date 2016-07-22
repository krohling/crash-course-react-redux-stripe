import React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { completeCheckout } from '../actions/products.js';

class Checkout extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(!this.props.selectedProduct) {
            this.context.router.push("/");
        }
    }

    onSubmit(event) {
        event.preventDefault();

        const { fields: { street, city, state, postal, card, exp, cvc } } = this.props;
        const isValid = [street, city, state, postal, card, exp, cvc].every((f) => (f.value));

        if(isValid) {
            const split_exp = exp.value.split("-");
            const payment = { 
                number: card.value, 
                exp_month: split_exp[1], 
                exp_year: split_exp[0], 
                cvc: cvc.value
            }
            const address = {
                street: street.value,
                city: city.value,
                state: state.value,
                postal: postal.value
             }

             this.props.completeCheckout(this.props.selectedProduct, address, payment)
                       .then((action) => {
                           if(action.error) {
                               alert(action.payload.message);
                           }
                           else {
                               alert("Your purchase was successful!");
                               this.context.router.push('/');
                           }
                       });
        }
    }

    render() {
        const { fields: { street, city, state, postal, card, exp, cvc } } = this.props;

        let productName = this.props.selectedProduct ? this.props.selectedProduct.name : '';
        return  <div>
                    <h1>Checkout: {productName}</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="panel panel-default">
                            <div className="panel-heading">Address</div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label htmlFor="streetAddressInput">Street Address</label>
                                    <input type="text" className="form-control" id="streetAddressInput" placeholder="1 Snowboard Way" onChange={street.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cityInput">City</label>
                                    <input type="text" className="form-control" id="cityInput" placeholder="Tahoe" onChange={city.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stateInput">State</label>
                                    <input type="text" className="form-control" id="stateInput" placeholder="California" onChange={state.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="postalInput">Postal Code</label>
                                    <input type="text" className="form-control" id="postalInput" placeholder="94131" onChange={postal.onChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">Payment</div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label htmlFor="cardNumberInput">Card Number</label>
                                    <input type="text" className="form-control" id="cardNumberInput" placeholder="4242 4242 4242 4242" onChange={card.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="expInput">Expiration Date</label>
                                    <input type="month" className="form-control" id="expInput" placeholder="12/2017" onChange={exp.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cvcInput">CVC</label>
                                    <input type="number" className="form-control" id="cvcInput" placeholder="123" onChange={cvc.onChange}/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-default">Checkout</button>
                    </form>
                </div>;
    }
}

const mapStateToProps = (state) => {
    return { selectedProduct: state.selectedProduct };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ completeCheckout }, dispatch);
}

Checkout.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default reduxForm({
    form: 'Checkout',
    fields: ['street', 'city', 'state', 'postal', 'card', 'exp', 'cvc']
})(connect(mapStateToProps, mapDispatchToProps)(Checkout));
