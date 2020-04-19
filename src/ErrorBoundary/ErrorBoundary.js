import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, errorMessage: error})
    }

    render() {
        if (this.state.hasError) {
            return <h2>{this.state.errorMessage}</h2>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;