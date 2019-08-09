/**
 * test module
 */
import * as ma from '../ma';

test('ma', () => {
  const r: number = ma.ma();
  expect(r).toBe(1);
});
