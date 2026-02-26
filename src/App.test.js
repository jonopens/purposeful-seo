import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './store';

function renderWithProviders(ui) {
  return render(
    <Provider store={store}>
      <Router>{ui}</Router>
    </Provider>
  );
}

test('renders app', () => {
  renderWithProviders(<App />);
  const navLink = screen.getByRole('link', { name: /purposeful seo/i });
  expect(navLink).toBeInTheDocument();
});
