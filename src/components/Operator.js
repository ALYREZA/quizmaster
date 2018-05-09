import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Oper = styled.h2`
    display: inline-block;
    color: palevioletred;
    font-size: 3em;
`;
const alloperator = ["+", "-", "\u00D7", "\u00F7"]
export class Operator extends Component {
    render() {
        const index = this.props.operator;
        return (
            <Oper> {alloperator[index]} </Oper>
        )
    }
};

export default connect()(Operator)
