import { render } from '@testing-library/react';

import HomeAssistant from './home-assistant';

describe('HomeAssistant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeAssistant />);
    expect(baseElement).toBeTruthy();
  });
});
