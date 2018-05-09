import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Button = styled.button`
  color: palevioletred;
  font-size: 2.4em;
  margin: 0.5em;
  padding: 1.5em;
  border: 2px solid palevioletred;
  border-radius: 10px;
`;

export class Buttom extends Component {

    render() {
        return (
            
            <Button onClick={this.props.onClick} > {this.props.val} </Button>
            
        )
    }
};
;
  
export default connect()(Buttom)