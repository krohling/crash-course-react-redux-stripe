import React from 'react';
import { connect } from 'react-redux';

class Checkout extends React.Component {

    render() {
        console.log(this.props.selectedProduct);
        return <div>Checkout Form!!!</div>;
    }

}

const mapStateToProps = (state) => {
    return { selectedProduct: state.selectedProduct };
}

export default connect(mapStateToProps)(Checkout);
