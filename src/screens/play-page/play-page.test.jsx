import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayPage from './play-page';

describe('Play', () => {
  const victory = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayPage />} />
      </Routes>
    </BrowserRouter>
  );

  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  test('Must have a title', () => {
    render(victory);

    screen.getByText('WHO AM I');
  });

  test('Must have an option to leave the page', () => {
    render(victory);

    screen.getByText('LEAVE GAME');
  });

  test('Must render timer', () => {
    render(victory);

    screen.getByText(/\d\d:\d\d/);
  });
});
