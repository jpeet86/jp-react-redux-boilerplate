import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../../state/actions/exampleAction';
import { exampleSelector } from '../../../state/selectors/exampleSelector';

class Counter extends Component {
    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    render() {
        console.log('PROPS: ', this.props)
        return (
            <div className="container">
                <button className="btn" onClick={ this.decrement }>-</button>

                <div className="score">
                    { this.props.count }
                </div>
                <button className="btn" onClick={ this.increment }>+</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    increment,
    decrement
};

const mapStateToProps = state => ({
    count: exampleSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
