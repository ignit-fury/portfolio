import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          background: '#1f1f1f',
          border: '1px solid #262626',
          color: '#a3a3a3',
          textAlign: 'center',
          margin: '20px'
        }}>
          <h3 style={{ color: '#f97316', marginBottom: '10px' }}>Something went wrong</h3>
          <p>{this.state.error?.message || 'An unexpected error occurred'}</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: '15px',
              padding: '8px 16px',
              background: 'transparent',
              border: '1px solid #f97316',
              color: '#f97316',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
