import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

import Display from "./components/Display";
import NavBar from "./components/NavBar";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders players with id players', () => {
  const { getByTestId } = render(<Display />);
  getByTestId('players');
})

test('DarkMode toggle button renders', () => {
  const { getByTestId } = render(<NavBar />);

  fireEvent.click(getByTestId('darkMode'));
  getByTestId('darkMode')
})

test('navBar header renders with className', () => {
  const {getByTestId} = render (<NavBar/>)
  getByTestId('rawr')
})

