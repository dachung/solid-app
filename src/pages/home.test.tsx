import { describe, expect, test } from 'vitest';
import { render } from 'solid-testing-library';
import '@testing-library/jest-dom/extend-expect';

import Home from './home';

describe('<Home />', () => {
  test('it will render an text and a button', () => {
    const { getByText, unmount } = render(() => <Home />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    unmount();
  });
});
