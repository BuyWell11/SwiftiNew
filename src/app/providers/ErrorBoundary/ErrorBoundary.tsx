import { Component, type ErrorInfo, type PropsWithChildren, type ReactNode } from 'react';
import styles from './ErrorBoundary.module.scss';

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className={styles.fallback}>
          <h1>Something went wrong</h1>
          <button type="button" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
