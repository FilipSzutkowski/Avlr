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
    this.errorInfo = errorInfo;
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative top-16 text-lg text-center">
          <h1 className="">Noe gikk galt...</h1>
          <p>{this.errorInfo}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
