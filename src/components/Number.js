import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';


const Num = styled.h1`
    display: inline-block;
    margin: 0.5em;
    font-size: 70px
`;

export class Number extends Component {

    render() {
        return (
            <Num> {this.props.val} </Num>
        )
    }
};

// const mapStateToProps = store => {
//
//     return {
//         operator: store.operator
//     }
//
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     setNumbers: (data) => dispatch(saveNumbersToStore(data))
// });
export default connect()(Number);
