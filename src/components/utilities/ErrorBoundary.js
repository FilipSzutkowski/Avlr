import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="relative top-16 text-lg text-center">
          Noe gikk galt...
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
