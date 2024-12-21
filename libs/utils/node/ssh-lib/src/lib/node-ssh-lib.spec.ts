import { nodeSshLib } from './node-ssh-lib';

describe('nodeSshLib', () => {
  it('should work', () => {
    expect(nodeSshLib()).toEqual('node-ssh-lib');
  });
});
