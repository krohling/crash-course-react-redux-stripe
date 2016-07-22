import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from '../actions/products.js'

const ProductListRow = (props) => {
    return <li key={props.product.id} className="media" style={ { cursor: 'pointer' } }>
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

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return  <ul className="media-list">
                    {this.props.products.map((p) => (<ProductListRow key={p.id} product={p} />))}
                </ul>;
    }

}

const mapStateToProps = (state) => {
    return { products: state.products };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
