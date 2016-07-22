import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts, selectProduct } from '../actions/products.js'
import { Router } from 'react-router';

const ProductListRow = (props) => {
    return <li key={props.product.id} onClick={() => props.onProductSelected(props.product)} className="media" style={ { cursor: 'pointer' } }>
                        <div className="media-left">
                            <a href="#">
                                <img className="media-object" height="64" src={props.product.image} />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{props.product.name}</h4>
                            <span>{props.product.description}</span>
                        </div>
                    </li>;
}

class ProductList extends React.Component {

    constructor() {
        super();
        this.onProductSelected = this.onProductSelected.bind(this);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    onProductSelected(product) {
        this.props.selectProduct(product);
        this.context.router.push("/checkout");
    }

    render() {
        return  <ul className="media-list">
                    {this.props.products.map((p) => (<ProductListRow key={p.id} product={p} onProductSelected={this.onProductSelected} />))}
                </ul>;
    }

}

const mapStateToProps = (state) => {
    return { products: state.products };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getProducts, selectProduct }, dispatch);
}

ProductList.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
