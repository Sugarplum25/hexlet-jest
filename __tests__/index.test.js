import reverse from '../src';

test('reverse', () => {
  const str = 'hello';
  expect(reverse(str)).toEqual('olleh');
  expect(reverse('')).toEqual('');
})