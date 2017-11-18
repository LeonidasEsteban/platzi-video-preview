import React, { Component } from 'react';
import ErrorHandle from '../components/error-handle';

class HandleError extends Component {
  state = {
    handleError: false
  }
  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    })
    // send info to backend
  }
  render() {
    if (this.state.handleError) {
      return (
        <ErrorHandle />
      )
    }
    return this.props.children
  }
}

export default HandleError;
