import * as React from 'react';
import './Layout.scss';

export function MainLayout({ children }) {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          Product Comparator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="loggedin-text">Logged in as admin@example.com</div>
      </nav>

      <div className="container-fluid">{children}</div>
    </div>
  );
}
