// __tests__/maze.test.js
import { describe, it, expect } from 'vitest';
import { findTilePositions } from '../mazeUtils';

describe('findTilePositions', () => {
  it('hittar alla mål (tile = 2)', () => {
    const layout = [
      [0, 2],
      [2, 0]
    ];
    const result = findTilePositions(layout, 2);
    expect(result).toEqual([{ row: 0, col: 1 }, { row: 1, col: 0 }]);
  });

  it('returnerar tom array om värdet inte finns', () => {
    const layout = [
      [0, 0],
      [0, 0]
    ];
    const result = findTilePositions(layout, 9);
    expect(result).toEqual([]);
  });
});