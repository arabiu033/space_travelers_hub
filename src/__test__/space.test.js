import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import store from '../redux/configureStore';

describe('stimulate user interaction', () => {
  test('test when user click Rockets nav link', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('Rockets'));
    await waitFor(() => screen.getAllByRole('heading'));
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Falcon 1');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Falcon 9');
    await waitFor(() => screen.getAllByRole('button'));
    expect(screen.getAllByRole('button').length).toBe(4);
  });

  test('test when user click Missions nav link', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('Missions'));
    await waitFor(() => screen.getAllByRole('button'));
    expect(screen.getAllByRole('button').length).toBe(20);
    const text = await screen.findByText('Iridium NEXT');
    expect(text).toBeInTheDocument();
  });

  test('test when user click Profile nav link', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('Rockets'));
    await waitFor(() => screen.getAllByRole('button'));
    fireEvent.click(screen.getAllByRole('button')[0]);
    fireEvent.click(screen.getByText('Profile'));
    const text = await screen.findByText('Falcon 1');
    expect(text).toBeInTheDocument();
  });
});
