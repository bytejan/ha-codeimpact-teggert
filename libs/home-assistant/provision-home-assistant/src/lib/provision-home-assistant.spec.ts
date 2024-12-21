import { provisionHomeAssistant } from './provision-home-assistant';

describe('provisionHomeAssistant', () => {
  it('should work', async() => {
    expect(await provisionHomeAssistant()).toEqual('provision-home-assistant');
  });
});
